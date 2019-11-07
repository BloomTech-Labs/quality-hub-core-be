const bcrypt = require('bcryptjs');

const { generateToken }= require('../utils')

async function signup(parent, args, context, info) {
  
  const hash = bcrypt.hashSync(args.password, 10)
  args.password = hash
  console.log(args);
  const user = await context.prisma.createUser(args)
  const token = generateToken(user)
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  console.log(args);
  const user = await context.prisma.user({email: args.email})
  if (!user) {
    throw new Error('Invalid Login')
  }

  const passwordMatch = await bcrypt.compare(args.password, user.password)
  if (!passwordMatch) {
    throw new Error('Invalid Login')
  }

  const token = generateToken(user)

  return {
    token,
    user,
  }
}

module.exports = {
  signup,
  login
}