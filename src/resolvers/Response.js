// TODO update these
function coach(review) {
  console.log(`CORE // Response // coach`)
  return { __typename: "User", id: review.coach }
}

function seeker(review) {
  console.log(`CORE // Response // coach`)

  return { __typename: "User", id: review.seeker }
}

module.exports = {
  coach,
  seeker
}
