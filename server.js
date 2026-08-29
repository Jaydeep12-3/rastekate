const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 9001;
const DIR  = __dirname;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.svg':  'image/svg+xml',
  '.jpg':  'image/jpeg',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
};

http.createServer((req, res) => {
  let filePath = path.join(DIR, req.url === '/' ? 'index.html' : req.url);
  const ext  = path.extname(filePath).toLowerCase();
  const type = TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404); res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': type });
      res.end(data);
    }
  });
}).listen(PORT, () => {
  console.log('Raste Kate running at http://localhost:' + PORT);
});
