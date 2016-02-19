"use strict";

var hapi = require('hapi'),
	routes = require('./routes'),
	server = new hapi.Server();

// Load stuff from ".env" into "process.env"
require("dotenv").load();

var server = module.exports = new hapi.Server();

server.connection({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT
});

server.route(routes);
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
