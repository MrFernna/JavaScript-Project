const express = require('express'); // 1. Import
const app = express();              // 2. Initialize
app.use(express.static('public')); // Memberi akses ke folder Front-end
const port = 3000;                  // 3. Port Allocation

// 4. Routing
app.get('/', (req, res) => {
  res.send('Website Utama Berhasil Dijalankan!');
});

// 5. Listener
app.listen(port, () => {
  console.log(`Server stabil berjalan di http://localhost:${port}`);
}); 