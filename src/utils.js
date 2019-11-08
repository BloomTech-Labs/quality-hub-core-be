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
        const { id } = jwt.verify (token, JWT_SECRET, function(err,verifiedJwt){
            if(err){
              console.log(`Error Cons logggg ${err}`); // Token has expired, has been tampered with, etc
            }else{
            console.log(`Verify the jwt ${JSON.stringify(verifiedJwt)}`); // Will contain the header and body
              return(verifiedJwt)
            }
          })
        console.log(`Thissssss one ${id}`)
        return id
    }
    throw new Error('Not Authenticated')
}

module.exports = {
  generateToken,
  JWT_SECRET,
  getUserId,
}

