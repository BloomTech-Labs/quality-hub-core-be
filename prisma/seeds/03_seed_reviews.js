const { Prisma } = require('../../src/generated/prisma-client')
const fs = require('fs')
const path = require('path')

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT
})

const resumeReviewFile = fs.readFileSync((path.resolve(__dirname, './seeded_resume_reviews.json')), (err => console.log(`err`)))

const resumeReviews = JSON.parse(resumeReviewFile)

console.log(`resumeReviews // `, resumeReviews)

resumeReviews.filter(entry => {
  entry.isComplete === true
})

// // TODO - write function to retrieve saved ResumeReviews 
// seeded_resume_reviews.json
// // TODO - write a function that filters out uncompleted ResumeReviews

// TODO - write a function that takes a single ResumeReview, and passes an object to Prisma DB with the expected shape of a Review
// * Review requires: coach, seeker, job_id, rating, 
// * Optional for Review: review (text of review)

const reviewText = [
  'Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',

  'It is a way I have of driving off the spleen and regulating the circulation.Whenever I find myself growing grim about the mouth;',
  'whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet;',
  'and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then,',
  'I account it high time to get to sea as soon as I can.',
  'This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. '
]

async function createReview(resumeReview) {
  // TODO add code to randomize rating
  const rating = Math.ceil(Math.random() * 5);


  const review = {
    rating,
    job: resumeReview.id,
    coach: {
      connect: { id: resumeReview.coach }
    },
    seeker: {
      connect: { id: resumeReview.seeker }
    },
    review: reviewText[rating],
    microservice: 'RESUMEQ'
  }


  console.log(`createReview / review`, review)

  return await db.createReview(review)
}


if (process.env.PRISMA_ENDPOINT.includes('localhost')) {
  resumeReviews.map(review => {
    createReview(review)
  })
}
