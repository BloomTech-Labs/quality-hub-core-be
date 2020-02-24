const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = require("./schema");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const User = require("./resolvers/User");
const Review = require("./resolvers/Review");
const Response = require("./resolvers/Response");
const ResumeReview = require("./resolvers/ResumeReview");

const jwt = require("jsonwebtoken");

const resolvers = {
  Query,
  Mutation,
  User,
  Review,
  Response,
  ResumeReview
};

const formatKey = key => {
  const beginKey = "-----BEGIN CERTIFICATE-----";
  const endKey = "-----END CERTIFICATE-----";

  const sanatizedKey = key
    .replace(beginKey, "")
    .replace(endKey, "")
    .replace("\n", "");

  const keyArray = sanatizedKey.split("").map((l, i) => {
    const position = i + 1;
    const isLastCharacter = sanatizedKey.length === position;
    if (position % 64 === 0 || isLastCharacter) {
      return l + "\n";
    }
    return l;
  });

  return `${beginKey}\n${keyArray.join("")}${endKey}\n`;
};

const authenticate = async (resolve, root, args, context, info) => {
  const auth = context.request.get("Authorization");

  const options = {
    // audience: process.env.AUDIENCE,
    // issuer: process.env.ISSUER,
    algorithms: ["RS256"]
  };

  const response = await fetch(process.env.JWT_AUTH0);
  const json = await response.json();
  const secret = json.keys[0].x5c[0];

  // console.log("PRE CONVERT SECRET: ", secret);

  const convertedSecret = formatKey(secret);

  // console.log("SECRET: ", convertedSecret);

  try {
    const token = auth.replace("Bearer ", "");
    // console.log(token);
    jwt.verify(token, convertedSecret, options);
    console.log("AUTHENTICATED.");
  } catch (e) {
    // console.log(e);
    throw new Error("Authentication token is invalid, please log in");
  }
};

const authCheck = {
  Query: {
    // user: authenticate,
    // users: authenticate
    // me: authenticate
  }
};

const server = new GraphQLServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ]),
  context: request => {
    return { ...request, prisma };
  },
  middlewares: [authCheck]
});

module.exports = server;
