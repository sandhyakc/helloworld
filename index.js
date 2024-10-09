require('dotenv').config();  // This must be at the very top

// Import Express modules
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

// define a route for the root url
app.get('/', (req, res) => {
  res.send('Bijaya Dashami 2081 Ko Hardik Mangalmaya Shuvakamana!');
});

const port = 3000;
const username = process.env.USERNAME || 'Guest';

console.log(`Username: ${username}`);  // This should log 'JohnDoe'


app.get('/name', (req, res) => {
  res.send(`My name is Sandhya KC !`);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


