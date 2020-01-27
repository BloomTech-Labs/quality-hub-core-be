
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = require('./schema');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const User = require('./resolvers/User');

const resolvers = {
  Query,
  Mutation,
  User,
};

console.log(`PRISMA_SECRET`, process.env.PRISMA_SECRET, `PRISMA_ENDPOINT`, process.env.PRISMA_ENDPOINT, `port`, process.env.PRISMA_PORT, `JWT_SECRET`, process.env.JWT_SECRET)

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
});

module.exports = server;
