const Subscription ={
  chat: {
    subscribe: async (parent, args, context, info) => 
    context.prisma.subscription.chat({}, info)
  }
}

module.exports = {
  Subscription
}