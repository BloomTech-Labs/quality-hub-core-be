module.exports = {
	__resolveReference,
};

function __resolveReference(user, context) {
	console.log(user);
	return context.prisma.user({ id: user.id });
}
