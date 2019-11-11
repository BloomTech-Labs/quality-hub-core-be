/*
  Gets industries connected with user

  @return {[Object]} - returns type Industry (look at ../schema.js)
*/
function industries(parent, args, context, info) {
  return context.prisma.user({id: parent.id}).industries();
}

module.exports = {
  industries
}