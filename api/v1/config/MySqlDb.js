const mysql = require('mysql');
//חיבור לבסיס mysql
var MySqlDb = mysql.createPool({
    connectionLimit: 100,
    database: "library",
    host: "localhost",
    port: 3306,
    user: "daniel2",
    password: "123"
});
module.exports = MySqlDb;