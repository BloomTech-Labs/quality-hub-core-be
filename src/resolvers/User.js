const { round } = require('../utils');

function __resolveReference(user, context) {
	return context.prisma.user({ id: user.id });
}

function stripeCustomerConnected(parent, args, context, info) {
	return Boolean(parent.stripeCusId)
}

function stripeCoachConnected(parent, args, context, info) {
	return Boolean(parent.stripeId)
}

// displays reviews given to a user -- filterable by microservice
async function reviewsReceived(parent, args, { prisma }) {
	const res = await prisma.user({ id: parent.id }).reviewsReceived({
		where: { microservice: args.microservice },
		first: args.first
	})
	return res
}


// displays reviews given by a user -- filterable by microservice
async function reviewsGiven(parent, _args, { prisma }) {
	const res = await prisma.user({ id: parent.id }).reviewsGiven({
		where: { microservice: args.microservice }
	})
	return res
}

// function returns the average rating for a coach -- microservice is an optional argument that can be provided to provide specificity
async function average_coach_rating(parent, args, { prisma }) {
	const response = await prisma.user({ id: parent.id }).reviewsReceived({ where: { AND: [{ microservice: args.microservice }, { rating_gte: 1 }] } })
	const ratings = response.map(review => {
		return review.rating
	})
	const average = ((ratings.reduce((a, b) => a + b, 0)) / ratings.length)
	const rounded = round(average)
	return typeof rounded === 'number' ? rounded : null
}

// returns number of ratings recieved
async function ratingsReceived(parent, args, { prisma }) {
	const response = await prisma.user({ id: parent.id }).reviewsReceived({
		where: { microservice: args.microservice }
	})

	return response.length
}


module.exports = {
	__resolveReference,
	stripeCustomerConnected,
	stripeCoachConnected,
	reviewsReceived,
	reviewsGiven,
	average_coach_rating,
	ratingsReceived,
};
