const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || "QUAIL_LIFESTYLE";

function checkFields(args) { 
  for (let key of Object.keys(args)) {
    if (!args[key]) {
      throw new Error('Invalid input');
    }
  }
}

function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
  };
  const options = {
    expiresIn: '12h'
  }
  return jwt.sign(payload, JWT_SECRET, options)
}

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer', '')
    const { id: userId } = jwt.verify (token, JWT_SECRET)
    return userId
  }
  throw new Error('Not Authenticated')
}

module.exports = {
  generateToken,
  getUserId,
  checkFields
}

