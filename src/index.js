require('dotenv').config();  // This must be at the very top

const express = require('express');
const mysql = require('mysql2');
const app = express();

// Create MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.DB_NAME
});

// Attempt to connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Database connected successfully');
  }
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 3000;
const username = process.env.USERNAME || 'Guest';

console.log(`Username: ${username}`);  // This should log 'JohnDoe'

app.get('/', (req, res) => {
	res.send(`Hello ${username}`);
});

app.get('/name', (req, res) => {
  res.send(`My name is Sandhya!`);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


