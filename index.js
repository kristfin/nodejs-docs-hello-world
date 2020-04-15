const http = require('http');
const port = process.env.PORT || 1337;

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
    console.log("Hello world, we are on port "+port);
});


server.listen(port);

console.log("Jabadabadu");

console.log("Server running at http://localhost:%d", port);
