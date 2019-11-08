
function info() {
  return 'Welcome to Quality Hub'
}

async function user (parents, args, context, info) {
  return await context.prisma.user({id: args.id})
}

async function users (parent, args, context, info) {
  return await context.prisma.users()
}

module.exports = {
  user,
  users,
  info,
}