import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const htmlFile = path.join(__dirname, 'The-Thousand-Bloom-Wedding-Stage-3D.html');

const server = http.createServer((req, res) => {
  fs.readFile(htmlFile, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Không tìm thấy file The-Thousand-Bloom-Wedding-Stage-3D.html');
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🌸 Sân khấu cưới 3D "The Thousand Bloom" đang chạy tại cổng ${PORT}`);
  console.log(`👉 Truy cập: http://localhost:${PORT}`);
});
