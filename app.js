const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("Hello from Blue-Green Deployment!\n");
});

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});

