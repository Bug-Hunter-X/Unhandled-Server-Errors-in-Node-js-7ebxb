const http = require('http');

const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

const port = 3000;

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1);
  } else {
    console.error(`Server error:`, err);
    process.exit(1);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});