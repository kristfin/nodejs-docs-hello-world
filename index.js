var http = require('http');
var express = require("express");
var RED = require("node-red");

const port = process.env.PORT || 1337;
console.log("Using port "+port);

// Create an Express app
var app = express();

// Add a simple route for static content served from 'public'
app.use("/",express.static("public"));

app.get('/debug', function (req, res) {
    console.log("Somebody asking for debug, yay!");
    console.log("we are listening to port "+port);
    res.send("we are listening to port "+port)
});

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot:"/red",
    httpNodeRoot: "/api",
    userDir:"./.node-red/",
    functionGlobalContext: { }    // enables global context
};

// Initialise the runtime with a server and settings
RED.init(server,settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(port);

// Start the runtime
RED.start();