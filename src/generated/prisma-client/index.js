"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Response",
    embedded: false
  },
  {
    name: "Microservice",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://core-3ed47f88fe.herokuapp.com/quality-hub-core-be/dev`
});
exports.prisma = new exports.Prisma();
