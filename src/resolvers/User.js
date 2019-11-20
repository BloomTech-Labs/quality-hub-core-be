function __resolveReference(user, context) {
  return context.prisma.user({email: user.email})
}

module.exports = {
  __resolveReference,
}