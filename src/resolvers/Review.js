const { prisma } = require('../generated/prisma-client')

async function coach(parent, args, context, info) {
  console.log(`Review // coach`, parent)
  const res = await context.prisma.review({ id: parent.id }).coach()
  return res
}

async function seeker(parent, args, context, info) {
  const res = await context.prisma.review({ id: parent.id }).seeker()
  return res
}

// with  __resolveReference, Apollo does not include Prisma inside of Context. Prisma Client is imported above and used directly inside of _resRef
async function __resolveReference(reference) {
  console.log(`Review resolver >>> __resolveReference`, reference)
  const res = await prisma.review({ job: reference.job })
  return res
}


module.exports = {
  coach,
  seeker,
  __resolveReference,

}
