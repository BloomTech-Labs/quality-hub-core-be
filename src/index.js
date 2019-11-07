const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
  info: String!
}
`

const resolvers = {
  Query: {
    info: () => `Welcome to Quaility Hub!`
  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
