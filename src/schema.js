const { gql } = require('apollo-server');

const typeDefs = gql`
  type User @key(fields: "id") {
    """
    Unique ID of user.
    """
    id: ID!
    """
    Kind of like storing the users card, but safe
    """
    stripeId: String
    first_name: String!
    last_name: String!
    email: String!
    city: String!
    """
    Chosen from a list of States and Regions on Front end
    """
    state: String!
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
  }

  extend type Query {
    """
    A test query to show that the backend works
    """

		"""
		Gets all registered users
		"""
		users: [User!]!

    """
    Gets all registered users
    """
    
    users(keywords: String): [User!]!
    
    """
    Gets user by ID
    """

		"""
		Gets user info based on credentials stored in token
		"""
		me: User!
	}

	type Mutation {
		"""
		Register user. Requires unique email. No empty strings cannot be passed in.
		"""
		signup(
			first_name: String!
			last_name: String!
			email: String!
			password: String!
			city: String!
			state: String!
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

		"""
		Logins in user and returns a token and user info if successful.
		"""
		login(email: String!, password: String!): AuthPayload!

		"""
		Updates user info. No empty strings cannot be passed in
		"""
		update(
			first_name: String
			last_name: String
			password: String
			email: String
			city: String
			state: String
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
		): User!
		checkEmail(email: String!): String!

    signup(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      city: String!
      state: String!
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
    
    """
    Logins in user and returns a token and user info if successful.
    """
    login(
      email: String!
      password: String!
    ): AuthPayload!
    
    """
    Updates user info. No empty strings cannot be passed in
    """
    update(
      stripeId: String
      first_name: String
      last_name: String
      password: String
      email: String
      city: String
      state: String
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
    ): User!
    checkEmail(
      email: String!
    ): String!

    deleteUser: User!

    createCharge(
      source: String!
      email: String!
    ): User!
  }
  """
  Used for log in and sign up. Returns token and user info
  """
  type AuthPayload {
    token: String!
    user: User!
  }
`;

module.exports = typeDefs;
