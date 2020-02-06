function review(review) {
  return { __typename: "Booking", id: review.job }
}


module.exports = {
  review
}
