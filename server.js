import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the Vite-built React app from dist/
app.use(express.static(join(__dirname, 'dist'), {
  maxAge: '1h',
  etag: true
}));

// Serve the standalone HTML at /standalone
app.get('/standalone', (req, res) => {
  res.sendFile(join(__dirname, 'The-Thousand-Bloom-Wedding-Stage-3D.html'));
});

// SPA fallback: serve index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🌸 The Thousand Bloom Wedding 3D is running on port ${PORT}`);
  console.log(`   React App:   http://localhost:${PORT}/`);
  console.log(`   Standalone:  http://localhost:${PORT}/standalone`);
});
