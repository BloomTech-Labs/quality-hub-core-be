function review(review) {
  return { __typename: "ResumeReview", id: review.job }
}


module.exports = {
  review
}
