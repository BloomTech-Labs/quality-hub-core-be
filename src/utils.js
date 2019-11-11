const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || "QUAIL_LIFESTYLE";

/*
  @param {Object} args - arguments sent into mutation such as fields for signup

  Prevents user from sending blank strings, since graphQL considers blank strings
  a valid input. Goes through each key in the submitted object and throws an error 
  if there are any blank strings.
*/
function checkFields(args) { 
  for (let key of Object.keys(args)) {
    if (!args[key]) {
      throw new Error('Invalid input');
    }
  }
}

/*
  @param {Object} user - user info pulled from database

  Creates a token storing user id and email. Expires in 12 hours
*/
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

/* 
  @param {Object} context - Contains request object

  Gets user ID from token stored in the authorization header. If there is no token or 
  if it is expired, it will throw an error.

  @return {ID} userId - User ID stored in token
*/
function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { id: userId } = jwt.verify(token, JWT_SECRET)
    return userId
  }
  throw new Error('Not Authenticated')
}

module.exports = {
  generateToken,
  getUserId,
  checkFields
}

