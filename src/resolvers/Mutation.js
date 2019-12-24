const bcrypt = require('bcryptjs');
const stripe = require('../stripe');

const {
	generateToken,
	checkFields,
	getUserId,
	checkAdmin,
} = require('../utils');

/*
  @param {String!} - first_name
  @param {String!} - last_name
  @param {String!} - email
  @param {String!} - password
  @param {String!} - city
  @param {String!} - state
  @param {String}  - image_url
  @param {String}  - gender
  @param {String}  - personal_url
  @param {String}  - blog_url
  @param {String}  - twitter_url
  @param {String}  - portfolio_url
  @param {String}  - linkedin_url
  @param {String}  - github_url
  @param {String}  - bio
  @param {Boolean} - payment_info

  Adds a user to database. Email must be unique.

  @return {String} - token: required for authorization
  @return {Object} - user: type User for newly created account
*/
async function signup(_parent, args, context) {
	const { first_name, last_name, password, email, city, state } = args;
	checkFields({ first_name, last_name, password, email, city, state });
	const hash = bcrypt.hashSync(args.password, 10);
	args.password = hash;
	const user = await context.prisma.createUser({
		...args,
		fn_lc: first_name.toLowerCase(),
		ln_lc: last_name.toLowerCase(),
		city_lc: city.toLowerCase(),
		state_lc: state.toLowerCase(),
	});
	const token = generateToken(user);

	return {
		token,
		user,
	};
}

/*
  @param {String} - email
  @param {String} - password

  Find user with email, then checks password

  @return {String} - token: required for authorization
  @return {Object} - user: type User for logged in user
*/
async function login(_parent, args, context) {
	const user = await context.prisma.user({ email: args.email });
	const token = generateToken(user);
	const passwordMatch = await bcrypt.compare(args.password, user.password);
	if (!user || !passwordMatch) {
		throw new Error('Invalid Login');
	}
	return {
		token,
		user,
	};
}

/*
  Same params as signup, as any field is editable. All fields are optional. Checks for empty fields. 

  @return {Object} - Type user with updated information
*/
async function update(_parent, args, context) {
	const id = getUserId(context);
	const { first_name, last_name, city, state } = args;

	if (first_name) {
		return await context.prisma.updateUser({
			data: { ...args, fn_lc: first_name.toLowerCase() },
			where: {
				id,
			},
		});
	} else if (last_name) {
		return await context.prisma.updateUser({
			data: { ...args, ln_lc: last_name.toLowerCase() },
			where: {
				id,
			},
		});
	} else if (city) {
		return await context.prisma.updateUser({
			data: { ...args, city_lc: city.toLowerCase() },
			where: {
				id,
			},
		});
	} else if (state) {
		return await context.prisma.updateUser({
			data: { ...args, state_lc: state.toLowerCase() },
			where: {
				id,
			},
		});
	} else {
		return await context.prisma.updateUser({
			data: args,
			where: {
				id,
			},
		});
	}
}

/*
  Deletes own user

  @return {Object} type User of deleted user
*/
async function deleteUser(_parent, _args, context) {
	const id = getUserId(context);
	return await context.prisma.deleteUser({ id });
}

async function checkEmail(_parent, args, context) {
	const user = await context.prisma.user({ email: args.email });
	if (user) {
		throw new Error('Email has been taken.');
	} else {
		return 'This email is available!';
	}
}

async function createCharge(_parent, args, context) {
	console.log('turkey bacon', args);
	// console.log(info)
	const userid = getUserId(context);
	const user = await context.prisma.user({ id: userid });
	// console.log(user);
	if (!user) {
		throw new Error('not authenticated');
	}

	// This creates the "customer" in stripe database
	const customer = await stripe.customers.create({
		email: user.email,
		source: args.source,
	});

	user.stripeId = await customer.id;

	const updatedUser = await context.prisma.updateUser({
		data: { stripeId: args.source },
		where: {
			email: user.email,
		},
	});

	console.log(args);
	return updatedUser;
}

module.exports = {
	signup,
	login,
	update,
	deleteUser,
	checkEmail,
	createCharge,
};
