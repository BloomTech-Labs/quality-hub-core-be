const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client');
const Mutation = require('./resolvers/Mutation');
const resolvers = {
  Query: {
    info: () => `Welcome to Quaility Hub!`
  },
  Mutation
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: prisma,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
