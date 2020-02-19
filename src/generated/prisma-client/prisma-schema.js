module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateResponse {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

enum Microservice {
  INTERVIEWQ
  RESUMEQ
}

type Mutation {
  createResponse(data: ResponseCreateInput!): Response!
  updateResponse(data: ResponseUpdateInput!, where: ResponseWhereUniqueInput!): Response
  updateManyResponses(data: ResponseUpdateManyMutationInput!, where: ResponseWhereInput): BatchPayload!
  upsertResponse(where: ResponseWhereUniqueInput!, create: ResponseCreateInput!, update: ResponseUpdateInput!): Response!
  deleteResponse(where: ResponseWhereUniqueInput!): Response
  deleteManyResponses(where: ResponseWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  response(where: ResponseWhereUniqueInput!): Response
  responses(where: ResponseWhereInput, orderBy: ResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Response]!
  responsesConnection(where: ResponseWhereInput, orderBy: ResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResponseConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Response {
  id: ID!
  review: Review!
  text: String!
  createdAt: DateTime!
  lastUpdated: DateTime!
}

type ResponseConnection {
  pageInfo: PageInfo!
  edges: [ResponseEdge]!
  aggregate: AggregateResponse!
}

input ResponseCreateInput {
  id: ID
  review: ReviewCreateOneWithoutResponseInput!
  text: String!
}

input ResponseCreateOneWithoutReviewInput {
  create: ResponseCreateWithoutReviewInput
  connect: ResponseWhereUniqueInput
}

input ResponseCreateWithoutReviewInput {
  id: ID
  text: String!
}

type ResponseEdge {
  node: Response!
  cursor: String!
}

enum ResponseOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  lastUpdated_ASC
  lastUpdated_DESC
}

type ResponsePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
  lastUpdated: DateTime!
}

type ResponseSubscriptionPayload {
  mutation: MutationType!
  node: Response
  updatedFields: [String!]
  previousValues: ResponsePreviousValues
}

input ResponseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ResponseWhereInput
  AND: [ResponseSubscriptionWhereInput!]
  OR: [ResponseSubscriptionWhereInput!]
  NOT: [ResponseSubscriptionWhereInput!]
}

input ResponseUpdateInput {
  review: ReviewUpdateOneRequiredWithoutResponseInput
  text: String
}

input ResponseUpdateManyMutationInput {
  text: String
}

input ResponseUpdateOneWithoutReviewInput {
  create: ResponseCreateWithoutReviewInput
  update: ResponseUpdateWithoutReviewDataInput
  upsert: ResponseUpsertWithoutReviewInput
  delete: Boolean
  disconnect: Boolean
  connect: ResponseWhereUniqueInput
}

input ResponseUpdateWithoutReviewDataInput {
  text: String
}

input ResponseUpsertWithoutReviewInput {
  update: ResponseUpdateWithoutReviewDataInput!
  create: ResponseCreateWithoutReviewInput!
}

input ResponseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  review: ReviewWhereInput
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  lastUpdated: DateTime
  lastUpdated_not: DateTime
  lastUpdated_in: [DateTime!]
  lastUpdated_not_in: [DateTime!]
  lastUpdated_lt: DateTime
  lastUpdated_lte: DateTime
  lastUpdated_gt: DateTime
  lastUpdated_gte: DateTime
  AND: [ResponseWhereInput!]
  OR: [ResponseWhereInput!]
  NOT: [ResponseWhereInput!]
}

input ResponseWhereUniqueInput {
  id: ID
}

type Review {
  id: ID!
  coach: User!
  seeker: User!
  job: String!
  rating: Int!
  review: String
  createdAt: DateTime!
  lastUpdated: DateTime!
  response: Response
  microservice: Microservice!
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  id: ID
  coach: UserCreateOneWithoutReviewsReceivedInput!
  seeker: UserCreateOneWithoutReviewsGivenInput!
  job: String!
  rating: Int!
  review: String
  response: ResponseCreateOneWithoutReviewInput
  microservice: Microservice!
}

input ReviewCreateManyWithoutCoachInput {
  create: [ReviewCreateWithoutCoachInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutSeekerInput {
  create: [ReviewCreateWithoutSeekerInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateOneWithoutResponseInput {
  create: ReviewCreateWithoutResponseInput
  connect: ReviewWhereUniqueInput
}

input ReviewCreateWithoutCoachInput {
  id: ID
  seeker: UserCreateOneWithoutReviewsGivenInput!
  job: String!
  rating: Int!
  review: String
  response: ResponseCreateOneWithoutReviewInput
  microservice: Microservice!
}

input ReviewCreateWithoutResponseInput {
  id: ID
  coach: UserCreateOneWithoutReviewsReceivedInput!
  seeker: UserCreateOneWithoutReviewsGivenInput!
  job: String!
  rating: Int!
  review: String
  microservice: Microservice!
}

input ReviewCreateWithoutSeekerInput {
  id: ID
  coach: UserCreateOneWithoutReviewsReceivedInput!
  job: String!
  rating: Int!
  review: String
  response: ResponseCreateOneWithoutReviewInput
  microservice: Microservice!
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  job_ASC
  job_DESC
  rating_ASC
  rating_DESC
  review_ASC
  review_DESC
  createdAt_ASC
  createdAt_DESC
  lastUpdated_ASC
  lastUpdated_DESC
  microservice_ASC
  microservice_DESC
}

type ReviewPreviousValues {
  id: ID!
  job: String!
  rating: Int!
  review: String
  createdAt: DateTime!
  lastUpdated: DateTime!
  microservice: Microservice!
}

input ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  job: String
  job_not: String
  job_in: [String!]
  job_not_in: [String!]
  job_lt: String
  job_lte: String
  job_gt: String
  job_gte: String
  job_contains: String
  job_not_contains: String
  job_starts_with: String
  job_not_starts_with: String
  job_ends_with: String
  job_not_ends_with: String
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  review: String
  review_not: String
  review_in: [String!]
  review_not_in: [String!]
  review_lt: String
  review_lte: String
  review_gt: String
  review_gte: String
  review_contains: String
  review_not_contains: String
  review_starts_with: String
  review_not_starts_with: String
  review_ends_with: String
  review_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  lastUpdated: DateTime
  lastUpdated_not: DateTime
  lastUpdated_in: [DateTime!]
  lastUpdated_not_in: [DateTime!]
  lastUpdated_lt: DateTime
  lastUpdated_lte: DateTime
  lastUpdated_gt: DateTime
  lastUpdated_gte: DateTime
  microservice: Microservice
  microservice_not: Microservice
  microservice_in: [Microservice!]
  microservice_not_in: [Microservice!]
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  coach: UserUpdateOneRequiredWithoutReviewsReceivedInput
  seeker: UserUpdateOneRequiredWithoutReviewsGivenInput
  job: String
  rating: Int
  review: String
  response: ResponseUpdateOneWithoutReviewInput
  microservice: Microservice
}

input ReviewUpdateManyDataInput {
  job: String
  rating: Int
  review: String
  microservice: Microservice
}

input ReviewUpdateManyMutationInput {
  job: String
  rating: Int
  review: String
  microservice: Microservice
}

input ReviewUpdateManyWithoutCoachInput {
  create: [ReviewCreateWithoutCoachInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutCoachInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutCoachInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithoutSeekerInput {
  create: [ReviewCreateWithoutSeekerInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutSeekerInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutSeekerInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateOneRequiredWithoutResponseInput {
  create: ReviewCreateWithoutResponseInput
  update: ReviewUpdateWithoutResponseDataInput
  upsert: ReviewUpsertWithoutResponseInput
  connect: ReviewWhereUniqueInput
}

input ReviewUpdateWithoutCoachDataInput {
  seeker: UserUpdateOneRequiredWithoutReviewsGivenInput
  job: String
  rating: Int
  review: String
  response: ResponseUpdateOneWithoutReviewInput
  microservice: Microservice
}

input ReviewUpdateWithoutResponseDataInput {
  coach: UserUpdateOneRequiredWithoutReviewsReceivedInput
  seeker: UserUpdateOneRequiredWithoutReviewsGivenInput
  job: String
  rating: Int
  review: String
  microservice: Microservice
}

input ReviewUpdateWithoutSeekerDataInput {
  coach: UserUpdateOneRequiredWithoutReviewsReceivedInput
  job: String
  rating: Int
  review: String
  response: ResponseUpdateOneWithoutReviewInput
  microservice: Microservice
}

input ReviewUpdateWithWhereUniqueWithoutCoachInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutCoachDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutSeekerInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutSeekerDataInput!
}

input ReviewUpsertWithoutResponseInput {
  update: ReviewUpdateWithoutResponseDataInput!
  create: ReviewCreateWithoutResponseInput!
}

input ReviewUpsertWithWhereUniqueWithoutCoachInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutCoachDataInput!
  create: ReviewCreateWithoutCoachInput!
}

input ReviewUpsertWithWhereUniqueWithoutSeekerInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutSeekerDataInput!
  create: ReviewCreateWithoutSeekerInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  coach: UserWhereInput
  seeker: UserWhereInput
  job: String
  job_not: String
  job_in: [String!]
  job_not_in: [String!]
  job_lt: String
  job_lte: String
  job_gt: String
  job_gte: String
  job_contains: String
  job_not_contains: String
  job_starts_with: String
  job_not_starts_with: String
  job_ends_with: String
  job_not_ends_with: String
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  review: String
  review_not: String
  review_in: [String!]
  review_not_in: [String!]
  review_lt: String
  review_lte: String
  review_gt: String
  review_gte: String
  review_contains: String
  review_not_contains: String
  review_starts_with: String
  review_not_starts_with: String
  review_ends_with: String
  review_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  lastUpdated: DateTime
  lastUpdated_not: DateTime
  lastUpdated_in: [DateTime!]
  lastUpdated_not_in: [DateTime!]
  lastUpdated_lt: DateTime
  lastUpdated_lte: DateTime
  lastUpdated_gt: DateTime
  lastUpdated_gte: DateTime
  response: ResponseWhereInput
  microservice: Microservice
  microservice_not: Microservice
  microservice_in: [Microservice!]
  microservice_not_in: [Microservice!]
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
  job: String
}

type Subscription {
  response(where: ResponseSubscriptionWhereInput): ResponseSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  authId: String!
  stripeId: String
  stripeCusId: String
  first_name: String!
  last_name: String!
  email: String!
  password: String!
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
  activated_stripe: Boolean
  fn_lc: String
  ln_lc: String
  city_lc: String
  state_lc: String
  chatActive: Boolean
  reviewsReceived(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  reviewsGiven(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  authId: String!
  stripeId: String
  stripeCusId: String
  first_name: String!
  last_name: String!
  email: String!
  password: String!
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
  activated_stripe: Boolean
  fn_lc: String
  ln_lc: String
  city_lc: String
  state_lc: String
  chatActive: Boolean
  reviewsReceived: ReviewCreateManyWithoutCoachInput
  reviewsGiven: ReviewCreateManyWithoutSeekerInput
}

input UserCreateOneWithoutReviewsGivenInput {
  create: UserCreateWithoutReviewsGivenInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReviewsReceivedInput {
  create: UserCreateWithoutReviewsReceivedInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutReviewsGivenInput {
  id: ID
  authId: String!
  stripeId: String
  stripeCusId: String
  first_name: String!
  last_name: String!
  email: String!
  password: String!
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
  activated_stripe: Boolean
  fn_lc: String
  ln_lc: String
  city_lc: String
  state_lc: String
  chatActive: Boolean
  reviewsReceived: ReviewCreateManyWithoutCoachInput
}

input UserCreateWithoutReviewsReceivedInput {
  id: ID
  authId: String!
  stripeId: String
  stripeCusId: String
  first_name: String!
  last_name: String!
  email: String!
  password: String!
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
  activated_stripe: Boolean
  fn_lc: String
  ln_lc: String
  city_lc: String
  state_lc: String
  chatActive: Boolean
  reviewsGiven: ReviewCreateManyWithoutSeekerInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  authId_ASC
  authId_DESC
  stripeId_ASC
  stripeId_DESC
  stripeCusId_ASC
  stripeCusId_DESC
  first_name_ASC
  first_name_DESC
  last_name_ASC
  last_name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  gender_ASC
  gender_DESC
  bio_ASC
  bio_DESC
  image_url_ASC
  image_url_DESC
  portfolio_url_ASC
  portfolio_url_DESC
  linkedin_url_ASC
  linkedin_url_DESC
  github_url_ASC
  github_url_DESC
  personal_url_ASC
  personal_url_DESC
  blog_url_ASC
  blog_url_DESC
  twitter_url_ASC
  twitter_url_DESC
  activated_stripe_ASC
  activated_stripe_DESC
  fn_lc_ASC
  fn_lc_DESC
  ln_lc_ASC
  ln_lc_DESC
  city_lc_ASC
  city_lc_DESC
  state_lc_ASC
  state_lc_DESC
  chatActive_ASC
  chatActive_DESC
}

type UserPreviousValues {
  id: ID!
  authId: String!
  stripeId: String
  stripeCusId: String
  first_name: String!
  last_name: String!
  email: String!
  password: String!
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
  activated_stripe: Boolean
  fn_lc: String
  ln_lc: String
  city_lc: String
  state_lc: String
  chatActive: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  authId: String
  stripeId: String
  stripeCusId: String
  first_name: String
  last_name: String
  email: String
  password: String
  city: String
  state: String
  gender: String
  bio: String
  image_url: String
  portfolio_url: String
  linkedin_url: String
  github_url: String
  personal_url: String
  blog_url: String
  twitter_url: String
  activated_stripe: Boolean
  fn_lc: String
  ln_lc: String
  city_lc: String
  state_lc: String
  chatActive: Boolean
  reviewsReceived: ReviewUpdateManyWithoutCoachInput
  reviewsGiven: ReviewUpdateManyWithoutSeekerInput
}

input UserUpdateManyMutationInput {
  authId: String
  stripeId: String
  stripeCusId: String
  first_name: String
  last_name: String
  email: String
  password: String
  city: String
  state: String
  gender: String
  bio: String
  image_url: String
  portfolio_url: String
  linkedin_url: String
  github_url: String
  personal_url: String
  blog_url: String
  twitter_url: String
  activated_stripe: Boolean
  fn_lc: String
  ln_lc: String
  city_lc: String
  state_lc: String
  chatActive: Boolean
}

input UserUpdateOneRequiredWithoutReviewsGivenInput {
  create: UserCreateWithoutReviewsGivenInput
  update: UserUpdateWithoutReviewsGivenDataInput
  upsert: UserUpsertWithoutReviewsGivenInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutReviewsReceivedInput {
  create: UserCreateWithoutReviewsReceivedInput
  update: UserUpdateWithoutReviewsReceivedDataInput
  upsert: UserUpsertWithoutReviewsReceivedInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutReviewsGivenDataInput {
  authId: String
  stripeId: String
  stripeCusId: String
  first_name: String
  last_name: String
  email: String
  password: String
  city: String
  state: String
  gender: String
  bio: String
  image_url: String
  portfolio_url: String
  linkedin_url: String
  github_url: String
  personal_url: String
  blog_url: String
  twitter_url: String
  activated_stripe: Boolean
  fn_lc: String
  ln_lc: String
  city_lc: String
  state_lc: String
  chatActive: Boolean
  reviewsReceived: ReviewUpdateManyWithoutCoachInput
}

input UserUpdateWithoutReviewsReceivedDataInput {
  authId: String
  stripeId: String
  stripeCusId: String
  first_name: String
  last_name: String
  email: String
  password: String
  city: String
  state: String
  gender: String
  bio: String
  image_url: String
  portfolio_url: String
  linkedin_url: String
  github_url: String
  personal_url: String
  blog_url: String
  twitter_url: String
  activated_stripe: Boolean
  fn_lc: String
  ln_lc: String
  city_lc: String
  state_lc: String
  chatActive: Boolean
  reviewsGiven: ReviewUpdateManyWithoutSeekerInput
}

input UserUpsertWithoutReviewsGivenInput {
  update: UserUpdateWithoutReviewsGivenDataInput!
  create: UserCreateWithoutReviewsGivenInput!
}

input UserUpsertWithoutReviewsReceivedInput {
  update: UserUpdateWithoutReviewsReceivedDataInput!
  create: UserCreateWithoutReviewsReceivedInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  authId: String
  authId_not: String
  authId_in: [String!]
  authId_not_in: [String!]
  authId_lt: String
  authId_lte: String
  authId_gt: String
  authId_gte: String
  authId_contains: String
  authId_not_contains: String
  authId_starts_with: String
  authId_not_starts_with: String
  authId_ends_with: String
  authId_not_ends_with: String
  stripeId: String
  stripeId_not: String
  stripeId_in: [String!]
  stripeId_not_in: [String!]
  stripeId_lt: String
  stripeId_lte: String
  stripeId_gt: String
  stripeId_gte: String
  stripeId_contains: String
  stripeId_not_contains: String
  stripeId_starts_with: String
  stripeId_not_starts_with: String
  stripeId_ends_with: String
  stripeId_not_ends_with: String
  stripeCusId: String
  stripeCusId_not: String
  stripeCusId_in: [String!]
  stripeCusId_not_in: [String!]
  stripeCusId_lt: String
  stripeCusId_lte: String
  stripeCusId_gt: String
  stripeCusId_gte: String
  stripeCusId_contains: String
  stripeCusId_not_contains: String
  stripeCusId_starts_with: String
  stripeCusId_not_starts_with: String
  stripeCusId_ends_with: String
  stripeCusId_not_ends_with: String
  first_name: String
  first_name_not: String
  first_name_in: [String!]
  first_name_not_in: [String!]
  first_name_lt: String
  first_name_lte: String
  first_name_gt: String
  first_name_gte: String
  first_name_contains: String
  first_name_not_contains: String
  first_name_starts_with: String
  first_name_not_starts_with: String
  first_name_ends_with: String
  first_name_not_ends_with: String
  last_name: String
  last_name_not: String
  last_name_in: [String!]
  last_name_not_in: [String!]
  last_name_lt: String
  last_name_lte: String
  last_name_gt: String
  last_name_gte: String
  last_name_contains: String
  last_name_not_contains: String
  last_name_starts_with: String
  last_name_not_starts_with: String
  last_name_ends_with: String
  last_name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  image_url: String
  image_url_not: String
  image_url_in: [String!]
  image_url_not_in: [String!]
  image_url_lt: String
  image_url_lte: String
  image_url_gt: String
  image_url_gte: String
  image_url_contains: String
  image_url_not_contains: String
  image_url_starts_with: String
  image_url_not_starts_with: String
  image_url_ends_with: String
  image_url_not_ends_with: String
  portfolio_url: String
  portfolio_url_not: String
  portfolio_url_in: [String!]
  portfolio_url_not_in: [String!]
  portfolio_url_lt: String
  portfolio_url_lte: String
  portfolio_url_gt: String
  portfolio_url_gte: String
  portfolio_url_contains: String
  portfolio_url_not_contains: String
  portfolio_url_starts_with: String
  portfolio_url_not_starts_with: String
  portfolio_url_ends_with: String
  portfolio_url_not_ends_with: String
  linkedin_url: String
  linkedin_url_not: String
  linkedin_url_in: [String!]
  linkedin_url_not_in: [String!]
  linkedin_url_lt: String
  linkedin_url_lte: String
  linkedin_url_gt: String
  linkedin_url_gte: String
  linkedin_url_contains: String
  linkedin_url_not_contains: String
  linkedin_url_starts_with: String
  linkedin_url_not_starts_with: String
  linkedin_url_ends_with: String
  linkedin_url_not_ends_with: String
  github_url: String
  github_url_not: String
  github_url_in: [String!]
  github_url_not_in: [String!]
  github_url_lt: String
  github_url_lte: String
  github_url_gt: String
  github_url_gte: String
  github_url_contains: String
  github_url_not_contains: String
  github_url_starts_with: String
  github_url_not_starts_with: String
  github_url_ends_with: String
  github_url_not_ends_with: String
  personal_url: String
  personal_url_not: String
  personal_url_in: [String!]
  personal_url_not_in: [String!]
  personal_url_lt: String
  personal_url_lte: String
  personal_url_gt: String
  personal_url_gte: String
  personal_url_contains: String
  personal_url_not_contains: String
  personal_url_starts_with: String
  personal_url_not_starts_with: String
  personal_url_ends_with: String
  personal_url_not_ends_with: String
  blog_url: String
  blog_url_not: String
  blog_url_in: [String!]
  blog_url_not_in: [String!]
  blog_url_lt: String
  blog_url_lte: String
  blog_url_gt: String
  blog_url_gte: String
  blog_url_contains: String
  blog_url_not_contains: String
  blog_url_starts_with: String
  blog_url_not_starts_with: String
  blog_url_ends_with: String
  blog_url_not_ends_with: String
  twitter_url: String
  twitter_url_not: String
  twitter_url_in: [String!]
  twitter_url_not_in: [String!]
  twitter_url_lt: String
  twitter_url_lte: String
  twitter_url_gt: String
  twitter_url_gte: String
  twitter_url_contains: String
  twitter_url_not_contains: String
  twitter_url_starts_with: String
  twitter_url_not_starts_with: String
  twitter_url_ends_with: String
  twitter_url_not_ends_with: String
  activated_stripe: Boolean
  activated_stripe_not: Boolean
  fn_lc: String
  fn_lc_not: String
  fn_lc_in: [String!]
  fn_lc_not_in: [String!]
  fn_lc_lt: String
  fn_lc_lte: String
  fn_lc_gt: String
  fn_lc_gte: String
  fn_lc_contains: String
  fn_lc_not_contains: String
  fn_lc_starts_with: String
  fn_lc_not_starts_with: String
  fn_lc_ends_with: String
  fn_lc_not_ends_with: String
  ln_lc: String
  ln_lc_not: String
  ln_lc_in: [String!]
  ln_lc_not_in: [String!]
  ln_lc_lt: String
  ln_lc_lte: String
  ln_lc_gt: String
  ln_lc_gte: String
  ln_lc_contains: String
  ln_lc_not_contains: String
  ln_lc_starts_with: String
  ln_lc_not_starts_with: String
  ln_lc_ends_with: String
  ln_lc_not_ends_with: String
  city_lc: String
  city_lc_not: String
  city_lc_in: [String!]
  city_lc_not_in: [String!]
  city_lc_lt: String
  city_lc_lte: String
  city_lc_gt: String
  city_lc_gte: String
  city_lc_contains: String
  city_lc_not_contains: String
  city_lc_starts_with: String
  city_lc_not_starts_with: String
  city_lc_ends_with: String
  city_lc_not_ends_with: String
  state_lc: String
  state_lc_not: String
  state_lc_in: [String!]
  state_lc_not_in: [String!]
  state_lc_lt: String
  state_lc_lte: String
  state_lc_gt: String
  state_lc_gte: String
  state_lc_contains: String
  state_lc_not_contains: String
  state_lc_starts_with: String
  state_lc_not_starts_with: String
  state_lc_ends_with: String
  state_lc_not_ends_with: String
  chatActive: Boolean
  chatActive_not: Boolean
  reviewsReceived_every: ReviewWhereInput
  reviewsReceived_some: ReviewWhereInput
  reviewsReceived_none: ReviewWhereInput
  reviewsGiven_every: ReviewWhereInput
  reviewsGiven_some: ReviewWhereInput
  reviewsGiven_none: ReviewWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  authId: String
  stripeId: String
  stripeCusId: String
  email: String
}
`
      }
    