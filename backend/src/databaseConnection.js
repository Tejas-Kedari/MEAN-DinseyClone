const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'disney',
    port: 3306
});

connection.connect(err => err ? console.log(err) : console.log("Database connected successfully"));

module.exports = connection;