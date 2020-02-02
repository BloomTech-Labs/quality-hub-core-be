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

function average_resume_q_rating(parent, _args, { prisma }) {
	console.log(`average_resume_q_rating // parent`, parent)
	const res = prisma.reviewsReceived({ id: parent.id })

}

function average_interview_q_rating(_parent, _args, { prima }) {
	console.log(`average_interview_q_rating // parent`, parent)
}


module.exports = {
	__resolveReference,
	stripeCustomerConnected,
	stripeCoachConnected,
	reviewsRecieved,
	reviewsGiven,
};
