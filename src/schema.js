const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    city: String!
    state: String!
    industries: [Industry!]!
    image_url: String
    gender: String
    # resumes: [String]
    personal_url: String
    blog_url: String
    twitter_url: String
    portfolio_url: String
    linkedin_url: String
    github_url: String
    bio: String
    payment_info: Boolean
  }

  type Query {
    info: String!
    users: [User!]!
    user(id: ID!): User!
    me: User!
    industries: [Industry!]!
  }

  type Mutation {
    signup(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      city: String!
      state: String!
      industry: ID
      image_url: String
      gender: String
      personal_url: String
      blog_url: String
      twitter_url: String
      portfolio_url: String
      linkedin_url: String
      github_url: String
      bio: String
      payment_info: Boolean
    ): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    update(
      first_name: String
      last_name: String
      password: String
      email: String
      city: String
      state: String
      # industry: [String]!
      image_url: String
      gender: String
      # resumes: [String]
      personal_url: String
      blog_url: String
      twitter_url: String
      portfolio_url: String
      linkedin_url: String
      github_url: String
      bio: String
      payment_info: Boolean
    ): User!
    postIndustry(name: String!): Industry!
    postIndustryToUser(industry_id: ID!): Industry!
    deleteIndustryFromUser(industry_id: ID!): Industry!
    deleteUser: User!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Industry {
    id: ID!
    name: String!
    users: [User!]!
  }
`;

module.exports = typeDefs;
