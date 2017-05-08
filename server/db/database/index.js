const mysql = require('mysql');
// const password = require('./config.js');
const Promise = require('bluebird');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dive_team'
});

Promise.promisifyAll(connection);

 
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
 
  console.log('Connected to SQL as id ' + connection.threadId);
});


module.exports = connection;