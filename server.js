const http = require('http');

const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//This is a simple Node.js server that listens on port 3000 and returns 'Hello, world!' when a request is made.  However, this code does not handle errors properly. If the port is already in use or there is another issue, the server will crash without any informative error message.