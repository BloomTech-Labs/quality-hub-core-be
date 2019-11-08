require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = require('./schema');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const resolvers = {
  Query,
  Mutation,
};

const server = new GraphQLServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      // typeDefs: './src/schema.graphql',
      resolvers,
    },
  ]),
  context: request => {
    return { ...request, prisma };
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
