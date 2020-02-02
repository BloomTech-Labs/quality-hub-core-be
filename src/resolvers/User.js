

function __resolveReference(user, context) {
	return context.prisma.user({ id: user.id });
}

function stripeCustomerConnected(parent, args, context, info) {
	return Boolean(parent.stripeCusId)
}

function stripeCoachConnected(parent, args, context, info) {
	return Boolean(parent.stripeId)
}


async function reviewsRecieved(parent, _args, { prisma }) {
	const res = await prisma.user({ id: parent.id }).reviewsReceived()
	return res
}



async function reviewsGiven(parent, _args, { prisma }) {
	const res = await prisma.user({ id: parent.id }).reviewsGiven()
	return res
}

// function returns the average rating for a coach -- microservice is an optional argument that can be provided to provide specificity
async function average_coach_rating(parent, args, { prisma }) {
	const response = await prisma.user({ id: parent.id }).reviewsReceived({ where: { AND: [{ microservice: args.microservice }, { rating_gte: 1 }] } })
	const ratings = response.map(review => {
		return review.rating
	})
	const average = (ratings.reduce((a, b) => a + b, 0)) / ratings.length
	return Math.round(average)
}


module.exports = {
	__resolveReference,
	stripeCustomerConnected,
	stripeCoachConnected,
	reviewsRecieved,
	reviewsGiven,
	average_coach_rating,
};
