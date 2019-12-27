const { gql } = require('apollo-server');

const typeDefs = gql`
	type User @key(fields: "id") {
		"""
		Unique ID of user.
		"""
		id: ID!
		stripeId: String
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
		# payment_info: Boolean
		stripeCoachCode: String
	}

	extend type Query {
		"""
		A test query to show that the backend works
		"""
		info: String!

		"""
		Gets all registered users
		"""
<<<<<<< HEAD
		users: [User!]!
=======
		users(keywords: String): [User!]!
>>>>>>> 854458d2d57ed6d75b3bdd3c65e371d48af3d7e0

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
<<<<<<< HEAD
			bio: String
			payment_info: Boolean
		): AuthPayload!

		"""
		Logins in user and returns a token and user info if successful.
		"""
		login(email: String!, password: String!): AuthPayload!
=======
			bio: String # payment_info: Boolean
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
			bio: String # payment_info: Boolean
			stripeCoachCode: String
		): User!

		checkEmail(email: String!): String!
>>>>>>> 854458d2d57ed6d75b3bdd3c65e371d48af3d7e0

		deleteUser: User!

		createCharge(source: String!, email: String): User!

		addCoachStripeID(code: String!): User!
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
