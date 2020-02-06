const { Prisma } = require('../../src/generated/prisma-client')
const fs = require('fs')


const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT
})

async function saveUsers() {
  const response = await db.users()

  const users = response.map(entry => {
    const { id, email, first_name, last_name } = entry
    return {
      id,
      email,
      first_name,
      last_name,
    }
  })

  let stringified = JSON.stringify(users)
  fs.writeFileSync("./prisma/seeds/seeded_users.json", stringified, 'utf8', (err => {
    console.log(err)
  }))
}

if (process.env.PRISMA_ENDPOINT.includes('localhost')) {
  saveUsers();
}
