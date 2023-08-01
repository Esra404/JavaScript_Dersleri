const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL bağlantısı oluşturun
const db = mysql.createConnection({
  host: 'localhost',
  user: 'db_user',
  password: 'db_password',
  database: 'userdb'
});

// MySQL bağlantısını başlatın
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL veritabanına bağlanıldı');
});

// JSON verileri işlemek için body-parser kullanın
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Kullanıcı kaydı için POST isteği
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const user = { name, email, password };
  const sql = 'INSERT INTO users SET ?';

  db.query(sql, user, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Kullanıcı kaydedildi.' });
    }
  });
});

// Kullanıcı girişi için POST isteği
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  const values = [email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.length === 0) {
      res.status(401).json({ message: 'Geçersiz e-posta veya şifre.' });
    } else {
      res.json({ message: 'Giriş başarılı.' });
    }
  });
});

// Sunucuyu dinlemeye başlayın
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
