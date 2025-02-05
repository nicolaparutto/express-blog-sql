//mysql import:
const mysql = require('mysql2');

//information to establish connection to the db:
const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'rootroot',
   database: 'blog_db'
});

connection.connect((err) => {
   if (err) throw err;
   console.log('DataBase connected')
});

module.exports = connection;