const mysql = require("mysql2");
const asyncMySQL = require("mysql2/promise")

const dotenv = require("dotenv");
dotenv.config();

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234!",
  database: "bookstore",
  dateStrings: true,
});


const asynConn = asyncMySQL.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1234!",
  database: "bookstore",
  dateStrings: true,
});

module.exports = {conn, asynConn}