const { gql } = require('apollo-server');

// TODO - extend external type Booking with Review

// TODO - extend external type ResumeReview with Review


const typeDefs = gql`
	type User @key(fields: "id") {
		id: ID!
		stripeCustomerConnected: Boolean
		stripeCoachConnected: Boolean
		first_name: String!
		last_name: String!
		email: String!
		city: String!
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
		reviewsReceived(microservice: String first: Int): [Review!]
		reviewsGiven(microservice: String): [Review!]
		average_coach_rating(microservice: String): Float
		ratingsReceived(microservice: String): Int
	}

	type Review @key(fields: "id") @key(fields:"job"){
		id: ID!
		coach: User!
		seeker: User!
		job: String! 
		rating: Int!
		review: String
		response: Response
		microservice: Microservice!
	}

	type Response {
		id: ID!
		review: Review!
		text: String!
	}


	enum Microservice {
		INTERVIEWQ
		RESUMEQ
	}

	extend type Query {
		info: String!
		users(keywords: String): [User!]!
		user(id: ID!): User!
		me: User!
		checkToken: LoginStatus!
		review(id: String): Review
		reviews: [Review]
		reviewsByJobId(id: String!): Review
		reviewsByMicroservice(microservice: String!): [Review]
		resumeQReviews: [Review]
		interviewQReiews: [Review]
		reviewsByCoach: [Review]
		reviewsBySeeker: [Review]
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
			stripeCusId: String
		): User!

		checkEmail(email: String!): String!

		deleteUser: User!

		createCustomer(email: String, source: String!): String!

		addCoachStripeId(code: String!): User!

		createStripeLink: String!

		stripeDirectCharge(
			amount: Int!
			currency: String
			source: String!
			coachId: String!
		): Status!

		stripePayout(
			amount: Int!
			currency: String
			method: String
			coachId: String!): String!

		stripeBalance: Balance!		
		stripePayIntent(amount: Int!, currency: String, source: String): User!

		stripeCreateToken(customer: String!): User!

		createReview(input: ReviewInput!): Review!
		
		updateReview(
			id: String!
			rating: Int
			review: String
		) : Review!
		deleteReview(id: String!): Review!

		createResponse(input: ResponseInput!): Response!
		updateResponse(
			id: String!
			text: String!
		) : Response!
		deleteResponse(id: String!): Response!
	}

	input ReviewInput {
		coach: String!
		seeker: String!
		job: String!
		microservice: String
		rating: Int
		review: String
	}

	input ResponseInput {
		review: String
		text: String
	}
	
	"""
	Used for log in and sign up. Returns token and user info
	"""
	type AuthPayload {
		token: String!
		user: User!
	}
	
	type LoginStatus {
		token: String
		valid: Boolean!
	}

	type Balance {
		available: Int!
		pending: Int!
	}
	
	type Status {
		success: String
		error: String

	}
`;

module.exports = typeDefs;
