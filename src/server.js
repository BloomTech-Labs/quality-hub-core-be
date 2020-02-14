
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = require('./schema');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const User = require('./resolvers/User');
const Review = require('./resolvers/Review');
const Response = require('./resolvers/Response');
const ResumeReview = require('./resolvers/ResumeReview')

const resolvers = {
  Query,
  Mutation,
  User,
  Review,
  Response,
  ResumeReview,
};

const autheticate = async (resolve, root, args, context, info) => {
  let token;
  try {
      token = context.request.get("Authorization");
      console.log('token', token)
  } catch (e) {
      return new AuthenticationError("No token");
  }
  const result = await resolve(root, args, context, info);
  return result;
};


const server = new GraphQLServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
  context: request => {
    return { ...request, prisma };
  },
  middlewares: [autheticate]
});

module.exports = server;
