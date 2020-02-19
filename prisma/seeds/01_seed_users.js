const { Prisma } = require("../../src/generated/prisma-client");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT
});

const users = [
  {
    authId: "auth0|5e39fcc11e2ac211a62d6999",
    email: "DorothyJAlfred@jourrapide.com",
    password: "testUser",
    first_name: "Dorothy",
    last_name: "Alfred",
    city: "Atlanta",
    state: "GA",
    image_url: "https://randomuser.me/api/portraits/lego/1.jpg"
  }
];

const addUser = async user => {
  user.password = bcrypt.hashSync(user.password, 10);
  console.log(`Adding ${user.first_name} ${user.last_name} to db`, user);

  return await db.createUser(user);
};

const submitUsers = users => {
  users.map(user => {
    addUser(user);
  });
};

submitUsers(users);
