const { getUserId } = require('../utils')
function info() {
  return 'Welcome to Quality Hub'
}

async function user (parents, args, context, info) {
  return await context.prisma.user({id: args.id})
}

async function users (parent, args, context, info) {
  return await context.prisma.users()
}

async function me (parents, args, context, info) {
  return await context.prisma.user({ id: getUserId(context)})
}

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