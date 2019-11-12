const bcrypt = require('bcryptjs');

const { generateToken, checkFields, getUserId, checkAdmin } = require('../utils')

/*
  @param {String!} - first_name
  @param {String!} - last_name
  @param {String!} - email
  @param {String!} - password
  @param {String!} - city
  @param {String!} - state
  @param {ID}      - industry
  @param {String}  - image_url
  @param {String}  - gender
  @param {String}  - personal_url
  @param {String}  - blog_url
  @param {String}  - twitter_url
  @param {String}  - portfolio_url
  @param {String}  - linkedin_url
  @param {String}  - github_url
  @param {String}  - bio
  @param {Boolean} - payment_info

  Adds a user to database. Email must be unique.

  @return {String} - token: required for authorization
  @return {Object} - user: type User for newly created account
*/
async function signup(parent, args, context, info) {
  checkFields(args);
  const hash = bcrypt.hashSync(args.password, 10)
  args.password = hash
  const {industry, ...rest} = args;
  let user;
  if (!industry) {
    user = await context.prisma.createUser({...rest})
  } else {
    user = await context.prisma.createUser({...rest, industries: {connect: {id: industry}}})
  }
  const token = generateToken(user)

  return {
    token,
    user,
  }
}

/*
  @param {String} - email
  @param {String} - password

  Find user with email, then checks password

  @return {String} - token: required for authorization
  @return {Object} - user: type User for logged in user
*/
async function login(parent, args, context, info) {
  const user = await context.prisma.user({email: args.email})
  const token = generateToken(user)
  const passwordMatch = await bcrypt.compare(args.password, user.password)
  if (!user || !passwordMatch) {
    throw new Error('Invalid Login')
  }
  return {
    token,
    user,
  }
}

/*
  Same params as signup, as any field is editable. All fields are optional. Checks for empty fields. 

  @return {Object} - Type user with updated information
*/
async function update(parent, args, context, info) {
  const id = getUserId(context);
  checkFields(args);
  const updatedUser = await context.prisma.updateUser({
    data: args,
    where: {
      id
    }
  })
  return updatedUser
}

// Delete soon
async function postIndustry (parents, args, context, info) {
  await checkAdmin(context);
  return await context.prisma.createIndustry({name: args.name})
}

/*
  @param {ID} - industry_id

  Connects user with specified Industry

  @return {Object} - type Industry
*/
async function postIndustryToUser (parents, args, context, info) {
  const userId = getUserId(context);
  return await context.prisma.updateIndustry({
    data: {users: {connect: { id: userId }
    }},
    where: {
      id: args.industry_id
    }
  })
} 

/*
  @param {ID} - industry_id

  Removes connection of user from specified Industry
  
  @return {Object} - type Industry
*/
async function deleteIndustryFromUser (parents, args, context, info) {
  const userId = getUserId(context)
  return await context.prisma.updateIndustry({
    data: {users: {delete: { id: userId }
    }},
    where: {
      id: args.industry_id
    }
  })
}
/*
  Deletes own user

  @return {Object} type User of deleted user
*/
async function deleteUser (parent, args, context, info) {
  const id = getUserId(context);
  return await context.prisma.deleteUser({id})
}

module.exports = {
  signup,
  login,
  update,
  postIndustry,
  postIndustryToUser,
  deleteIndustryFromUser,
  deleteUser
}
