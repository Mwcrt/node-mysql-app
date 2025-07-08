const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'mysql',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'mypassword',
  database: process.env.DB_NAME || 'testdb',
});

app.get('/', (req, res) => {
  connection.ping(err => {
    if (err) {
      return res.status(500).send('Error conectando a la base de datos');
    }
    res.send('Conexión exitosa utilizando Node.js, Express y MYSQL');
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
