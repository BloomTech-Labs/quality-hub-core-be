const jwt = require('jsonwebtoken')
const JWT_SECRET = "QUAIL_LIFESTYLE"

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
    if(Authorization) {
        const token = Authorization.replace('Bearer', '')
        const { userId } = jwt.verify (token, JWT_SECRET)
        return userId
    }
    throw new Error('Not Authenticated')
}

module.exports = {
  generateToken,
  JWT_SECRET,
  getUserId,
}

