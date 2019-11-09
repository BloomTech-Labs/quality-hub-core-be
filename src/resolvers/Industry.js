function users(parent, args, context, info) {
  return context.prisma.industry({ id: parent.id }).users() 
}

module.exports = {
  users
}