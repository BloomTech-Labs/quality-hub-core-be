// require('dotenv').config()
const express = require('express');
const server = require('./server');

// server.express.use('/doc', express.static("doc/schema"));

// const options = { port: process.env.APOLLO_PORT || 4444 };
const PORT = process.env.APOLLO_PORT


// server.start(options, ({ port }) => {
// 	console.log(`QualityHub Core running on ${port}`);
// });


server.listen(PORT).then(({ url }) => {
	console.log(`QualityHub Core running at ${url}`)
})
