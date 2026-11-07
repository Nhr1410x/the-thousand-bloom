import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Ưu tiên file trong dist/index.html, nếu không thì lấy The-Thousand-Bloom-Wedding-Stage-3D.html
const getHtmlPath = () => {
  const distPath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(distPath)) return distPath;
  return path.join(__dirname, 'The-Thousand-Bloom-Wedding-Stage-3D.html');
};

const server = http.createServer((req, res) => {
  const htmlFile = getHtmlPath();
  fs.readFile(htmlFile, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Không tìm thấy file giao diện 3D');
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
