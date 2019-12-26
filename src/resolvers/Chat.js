const {forwardTo} = require('prisma-binding')


const Query = {
  chatsConnection: forwardTo('prisma'),
}

module.exports = { Query }