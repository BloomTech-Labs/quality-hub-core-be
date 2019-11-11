const { getUserId } = require('../utils')

/*
  Test query

  @return {String} 
*/
function info() {
  return 'Welcome to Quality Hub'
}

/*
  @param {ID} id: id of user

  Get info of a user by their ID

  @return {Object}  - Type User with specified ID
*/
async function user (parents, args, context, info) {
  return await context.prisma.user({id: args.id})
}

/*
  Get info of all users

  @return {[Object]}  - All users
*/
async function users (parent, args, context, info) {
  return await context.prisma.users()
}

/*
  Get info of self, or info or user stored in token

  @return {Object}  - Type User 
*/
async function me (parents, args, context, info) {
  return await context.prisma.user({ id: getUserId(context)})
}

/*
  Get list of Industries, including users connected to industry

  @return {[Object]}  - Type Industry
*/
async function industries(parents, args, context, info) {
  return await context.prisma.industries()
}

module.exports = {
  user,
  users,
  info,
  me,
  industries
}