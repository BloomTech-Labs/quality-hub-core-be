module.exports = {
    user
}

function user(root, _args, context) {
    return context.prisma.availability({ id: root.id }).user()
}