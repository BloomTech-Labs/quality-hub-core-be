const bcrypt = require('bcryptjs');
async function signup(parent, args, context, info) {
  
  const hash = bcrypt.hashSync(args.password, 10)
  args.password = hash
  console.log(args);
  return await context.prisma.createUser(args)
}

module.exports = {
  signup
}