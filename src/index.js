require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { buildFederatedSchema } = require('@apollo/federation');
const { getUserId }= require('./utils')
const typeDefs = require('./schema');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const User = require('./resolvers/User');
const Industry = require('./resolvers/Industry');

const resolvers = {
  Query,
  Mutation,
  User,
  Industry,
  
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
    // console.log(request.request.headers.authorization);
    return { ...request, prisma };
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
