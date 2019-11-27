const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    """
    Unique ID of user.
    """
    id: ID!
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
    # coach_bookings: [Booking]
    # seeker_booking: [Booking]
    availability: [Availability]
  }

  type Availability {
    """
    Availability slot by user
    """
    id: ID!
    dayOfWeek: String!
    start_hour: Int!
    start_minute: Int!
    end_hour: Int!
    end_minute: Int!
    user: User!
  }

  # enum ApptType {
  #   INTERVIEW
  #   RESUME
  # }

  # type Booking {
  #   id: ID!
  #   type: ApptType!
  #   year: Int!
  #   month: Int!
  #   day: Int!
  #   hour: Int!
  #   minute: Int!
  #   coach: User!
  #   seeker: User!
  # }
  

  type Query {
    """
    A test query to show that the backend works
    """

    info: String!

    """
    Gets all registered users
    """
    
    users: [User!]!
    
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

    """
    Gets availabilities based on user

    Gets bookings by coach id

    Gets bookings by seeker id
    coachBookings: [Booking]
    seekerBookings: [Booking]
    """
    
    availabilities: [Availability]


    
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
    login(
      email: String!
      password: String!
    ): AuthPayload!
    
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
    checkEmail(
      email: String!
    ): String!
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
