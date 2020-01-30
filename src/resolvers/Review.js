
function coach(review) {
  console.log(`resolving seeker on review`)
  return { __typename: "User", id: review.coach }
}

function seeker(review) {
  console.log(`resolving seeker on review`)
  return { __typename: "User", id: review.seeker }
}

function __resolveReference(review, { prisma }) {
  return prisma.review({ id: review.id })
}

module.exports = {
  coach,
  seeker,
  __resolveReference
}
