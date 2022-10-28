import { createServer } from 'http';
const hostname = '0.0.0.0';
const port = 3001;

createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
