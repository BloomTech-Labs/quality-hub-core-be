require("dotenv").config();
const express = require("express");
const server = require("./server");

// auth0
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

// middleware
const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: [process.env.AUDIENCE],
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithm: "RS256"
});

// server.express.use(authCheck);
server.express.use("/doc", express.static("doc/schema"));

const options = { port: process.env.APOLLO_PORT || process.env.PORT || 4444 };

server.start(options, ({ port }) => {
  console.log(`QualityHub Core running on ${port}`);
});
