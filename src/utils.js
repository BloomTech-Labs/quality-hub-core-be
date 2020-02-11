const jwt = require("jsonwebtoken");

const JWT_SECRET = 'AXEA4pelcjSTgBeoCOUQ8PNwrBzdNxLpV2Htjp6gVaDxc7oVnW7EDkK6Tvc2Wksi';
const options = {
  audience: "https://explorequality.auth0.com/api/v2/",
  issuer: "https://explorequality.auth0.com/"
}

/*
  @param {Object} args - arguments sent into mutation such as fields for signup

  Prevents user from sending blank strings, since graphQL considers blank strings
  a valid input. Goes through each key in the submitted object and throws an error 
  if there are any blank strings.
*/
function checkFields(args) {
  for (let key of Object.keys(args)) {
    if (!args[key]) {
      throw new Error("Invalid input for required fields");
    }
  }
}

/* 
  generate jwt token based on auth o token
*/
const generateAuth0Token = (token) => {
  const payload = {
    id: jwt.decoded(token.id)
  }
}

async function getAuth0Token(context){
  const Authorization = await context.request.get('Authorization');
  console.log("getAuth0Token Authorization", Authorization);
  return Authorization;
}

/*
  @param {Object} user - user info pulled from database

  Creates a token storing user id and email. Expires in 12 hours
*/
function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email
  };
  const options = {
    expiresIn: "3d"
  };
  return jwt.sign(payload, JWT_SECRET, options);
}



/* 
  @param {Object} context - Contains request object

  Gets user ID from token stored in the authorization header. If there is no token or 
  if it is expired, it will throw an error.

  @return {ID} userId - User ID stored in token
*/
function getUserId(context) {
  const Authorization = context.request.get("Authorization");
console.log("Authorization", Authorization)
  console.log("GET AUTH0 TOKEN!!!!!!!!!!", getAuth0Token());

  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    console.log("token", token);  
    const jwToken = jwt.verify(token, JWT_SECRET);
    return jwToken.sub;
  } 
  throw new Error("Not Authenticated");
}

// function getUserId(context) {
//   const Authorization = context.request.get('Authorization')
//   if (Authorization) {
//     const token = Authorization.replace('Bearer ', '')
//     const jwToken = jwt.verify(token, JWT_SECRET)
//     return jwToken.userId;
//   }
//   throw new Error('Not Authenticated')
// }

/*
  Checks the email stored in the token against the saved admin email in an .env file.
*/
async function checkAdmin(context) {
  const user = await context.prisma.user({ id: getUserId(context) });
  if (user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("You are unauthorized to perform this action.");
  }
}

function validToken(context) {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    return jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return {
          token: "",
          valid: false
        };
      } else {
        return {
          token: generateToken(decoded),
          valid: true
        };
      }
    });
  }
  throw new Error("Not Authenticated");
}

// this function is used to round average_coach_rating
function round(value) {
  console.log(`rounding value`, value);
  const rounded = Math.round(value * 2) / 2;
  console.log(`rounded val`, rounded);
  return rounded;
}

module.exports = {
  checkFields,
  generateToken,
  getUserId,
  checkAdmin,
  validToken,
  getAuth0Token,
  round
};
