const bcrypt = require('bcryptjs');

const { generateToken, checkFields } = require('../utils')

async function signup(parent, args, context, info) {
  checkFields(args);
  const hash = bcrypt.hashSync(args.password, 10)
  args.password = hash
  const user = await context.prisma.createUser(args)
  const token = generateToken(user)

  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({email: args.email})
  const token = generateToken(user)
  const passwordMatch = await bcrypt.compare(args.password, user.password)

  if (!user || !passwordMatch) {
    throw new Error('Invalid Login')
  }

  return {
    token,
    user,
  }
}

async function update(parent, args, context, info) {
  const updatedUser = await context.prisma.updateUser({
    data: args,
    where: {
      email: args.email
    }
  })

  return updatedUser
}

module.exports = {
  signup,
  login,
  update
}