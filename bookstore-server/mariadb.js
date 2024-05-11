const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234!",
  database: "bookstore",
  dateStrings: true,
});

module.exports = connection;
