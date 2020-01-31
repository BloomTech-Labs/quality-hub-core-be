// TODO update these
function coach(review) {
  return { __typename: "User", id: review.coach }
}

function seeker(review) {
  return { __typename: "User", id: review.seeker }
}

module.exports = {
  coach,
  seeker
}
