function __resolveReference(user, context) {
	console.log(user);
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


module.exports = {
	__resolveReference,
	stripeCustomerConnected,
	stripeCoachConnected,
	reviewsRecieved,
	reviewsGiven,

};
