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

  module.exports = {
      generateToken,
      JWT_SECRET,
    }