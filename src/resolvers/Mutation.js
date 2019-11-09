const bcrypt = require('bcryptjs');

const { generateToken, checkFields, getUserId } = require('../utils')

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
  const id = getUserId(context);
  const updatedUser = await context.prisma.updateUser({
    data: args,
    where: {
      id
    }
  })

  return updatedUser
}

async function postIndustry (parents, args, context, info) {
  return await context.prisma.createIndustry({name: args.name})
}

async function postIndustryToUser (parents, args, context, info) {
  const userId = getUserId(context)
  return await context.prisma.updateIndustry({
    data: {users: {connect: { id: userId }
    }},
    where: {
      id: args.industry_id
    }
  })
} 

async function deleteIndustryFromUser (parents, args, context, info) {
  const userId = getUserId(context)
  return await context.prisma.updateIndustry({
    data: {users: {delete: { id: userId }
    }},
    where: {
      id: args.industry_id
    }
  })
}

async function deleteUser (parent, args, context, info) {
  const id = getUserId(context);
  return await context.prisma.deleteUser({id})
}

module.exports = {
  signup,
  login,
  update,
  postIndustry,
  postIndustryToUser,
  deleteIndustryFromUser,
  deleteUser
}
