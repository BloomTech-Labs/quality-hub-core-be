module.exports = {
	user,
	users,
	info,
	me,
};

const { getUserId, checkAdmin } = require('../utils');

/*
  Test query

  @return {String} 
*/
function info() {
	return 'Welcome to Quality Hub';
}

/*
  @param {ID} id: id of user

  Get info of a user by their ID

  @return {Object}  - Type User with specified ID
*/
function user(_parents, args, context) {
	return context.prisma.user({ id: args.id });
}

/*
  Get info of all users

  @return {[Object]}  - All users
*/
async function users(_parent, _args, context) {
	await checkAdmin(context);
	return await context.prisma.users();
}

/*
  Get info of self, or info or user stored in token

  @return {Object}  - Type User 
*/
function me(_parent, _args, context) {
	return context.prisma.user({ id: getUserId(context) });
}
