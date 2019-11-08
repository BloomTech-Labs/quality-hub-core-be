const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { buildFederatedSchema } = require('@apollo/federation');
const { getUserId }= require('./utils')
const typeDefs = require('./schema');
const Mutation = require('./resolvers/Mutation');

const resolvers = {
  Query: {
    info: () => `Welcome to Quaility Hub!`,
    users: (parent, args, context, info) => 
      context.prisma.users()
    ,
    me: (parent, args, context, info) => {
      console.log(`Outside CL ${getUserId(context)}`)
    context.prisma.user(getUserId(context))}
  ,
  },
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
    // console.log(request.request.headers.authorization);
    return { ...request, prisma };
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
