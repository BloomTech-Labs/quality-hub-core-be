async function coach(parent, args, context, info) {
  const res = await context.prisma.review({ id: parent.id }).coach()
  return res
}

async function seeker(parent, args, context, info) {
  const res = await context.prisma.review({ id: parent.id }).seeker()
  return res
}


module.exports = {
  coach,
  seeker,
}
