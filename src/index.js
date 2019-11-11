require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = require('./schema');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const User = require('./resolvers/User');
const Industry = require('./resolvers/Industry');


/* 
  Resolvers for Query and Mutation calls
  and data types (User and Industry), each function is called when executed
*/
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
      resolvers,
    },
  ]),
  context: request => {
    return { ...request, prisma };
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
