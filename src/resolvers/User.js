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

// function reviewsGiven(parent, args, {prisma}) {
// 	console.log(`Finding reviews given as seeker.`)
// 	return prisma.reviews({seeker: parent.id})
// }




module.exports = {
	__resolveReference,
	stripeCustomerConnected,
	stripeCoachConnected,
};
