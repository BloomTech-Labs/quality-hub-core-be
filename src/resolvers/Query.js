const { getUserId, checkAdmin } = require('../utils')

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
  await checkAdmin(context);
  return await context.prisma.users()
}

/*
  Get info of self, or info or user stored in token

  @return {Object}  - Type User 
*/
async function me (parent, args, context, info) {
  return await context.prisma.user({ id: getUserId(context)})
}

/*
  Get availabilities of user, or info or user stored in token

  @return {Object}  - Type User 
*/
async function availabilities (parents, args, context, info) {
  console.log(getUserId(context));
  return await context.prisma.availabilities();
  // return await context.prisma.availability({ where: {
  //   user: {
  //     id
  //   }
  // } })
}

// async function allBookings (parents, args, context, info) {
//   return await context.prisma.bookings()
// }

// async function coachBookings (parents, args, context, info) {
//   // console.log(getUserId(context));
//   // let allBookings = await context.prisma.bookings();
//   // console.log(allBookings);

  
//   // return await context.prisma.booking({ id: "ck3glzitb003507038vyfcmyh"})
//   return await context.prisma.booking({ coach: {id: getUserId(context) }})
// }

// async function seekerBookings (parents, args, context, info) {
//   return await context.prisma.booking({ seeker: getUserId(context) })
// }

module.exports = {
  user,
  users,
  info,
  me,
  availabilities,
  // coachBookings,
  // seekerBookings,
}
