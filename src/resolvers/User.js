function industries(parent, args, context, info) {
  return context.prisma.user({id: parent.id}).industries();
}

module.exports = {
  industries
}