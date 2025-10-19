const http = require('http');
const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || "default";

const server = http.createServer((req, res) => {
  res.end('Hello from ${version} deployment!\n');
});

server.listen(port, () => {
  console.log('App running on port ${port}');
});

