const { gql } = require('apollo-server');

const typeDefs = gql`
	type User @key(fields: "id") {
		"""
		Unique ID of user.
		"""
		id: ID!
		stripeId: String
		stripeCusId: String
		first_name: String!
		last_name: String!
		email: String!
		city: String!
		"""
		Chosen from a list of States and Regions on Front end
		"""
		state: String!
		gender: String
		bio: String
		image_url: String
		portfolio_url: String
		linkedin_url: String
		github_url: String
		personal_url: String
		blog_url: String
		twitter_url: String
		chatActive: Boolean
	}

	extend type Query {
		"""
		A test query to show that the backend works
		"""
		info: String!

		"""
		Gets all registered users
		"""
		users(keywords: String): [User!]!

		"""
		Gets user by ID
		"""
		user(
			"""
			Unique ID
			"""
			id: ID!
		): User!

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
		): AuthPayload!

		"""
		Logins in user and returns a token and user info if successful.
		"""
		login(email: String!, password: String!): AuthPayload!

		"""
		Updates user info. No empty strings cannot be passed in
		"""
		update(
			stripeId: String
			stripeCusId: String
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
		): User!

		checkEmail(email: String!): String!

		deleteUser: User!

		createCustomer(email: String, source: String!): User!

		addCoachStripeId(code: String!): User!

		createStripeLogin(stripeId: String!): User!

		stripeDirectCharge(amount: Int!, currency: String, source: String, on_behalf_of: String): User!

		stripePayIntent(amount: Int!, currency: String, source: String): User!

		stripeCreateToken(customer: String!): User!
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
