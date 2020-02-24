// TODO update these
function coach(review) {
  console.log(`CORE // Response // coach`);
  return { __typename: "User", authId: review.coach };
}

function seeker(review) {
  console.log(`CORE // Response // coach`);

  return { __typename: "User", authId: review.seeker };
}

module.exports = {
  coach,
  seeker
};
