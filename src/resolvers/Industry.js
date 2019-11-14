

/*
  Gets users that are connected with its industry

  @return {[Object]} of type User (look at ../schema.js)
*/
function users(parent, args, context, info) {
  return context.prisma.industry({ id: parent.id }).users() 
}

module.exports = {
  users
}