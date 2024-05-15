/* 이창우 */
const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); // crypto 모듈 : 암호화
require("dotenv").config();

const join = (req, res) => {
  const { email, password } = req.body;
  let sql = `INSERT INTO users (email, password, salt) VALUES (?, ?, ?)`;
  const salt = crypto.randomBytes(64).toString("base64");
  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 100, 10, "sha512")
    .toString("base64");
  let values = [email, hashPassword, salt];

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end(); // BAD REQUEST
    }
    if (results.affectedRows >= 1) res.status(StatusCodes.CREATED).json();
    else return res.status(StatusCodes.BAD_REQUEST).end(); // BAD REQUEST
  });
};

const check = (req, res) => {
  const { email } = req.body;
  let sql = `SELECT * FROM users WHERE email =? `;
  conn.query(sql, email, (err, results) => {
    if(err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();    
    }
    if(results.length >= 1) return res.status(StatusCodes.BAD_REQUEST).end();
    return res.status(StatusCodes.OK).end();
  })
}

const login = (req, res) => {
  const { email, password } = req.body;
  let sql = `SELECT * FROM users WHERE email = ?`;
  conn.query(sql, email, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    const loginUser = results[0];
    const hashPassword = crypto
      .pbkdf2Sync(password, loginUser.salt, 100, 10, "sha512")
      .toString("base64");
    if (loginUser && loginUser.password == hashPassword) {
      const token = jwt.sign(
        {
          id: loginUser.id,
          email: loginUser.email,
        },
        process.env.PRIVATE_KEY,
        {
          expiresIn: "30m",
          issuer: "changwooLee",
        }
      );
      res.cookie("token", token, {
        httpOnly: true,
      });
      console.log(token);
      return res.status(StatusCodes.OK).json(results);
    } else {
      return res.status(StatusCodes.UNAUTHORIZED);
    }
  });
};

const passwordResetRequest = (req, res) => {
  const { email } = req.body;
  let sql = `SELECT * FROM users WHERE email = ?`;
  conn.query(sql, email, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    const user = results[0];
    if (user) {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }
  });
};

const passwordReset = (req, res) => {
  const { email, password } = req.body;
  let sql = `UPDATE users SET password =?, salt =? WHERE email =?`;
  const salt = crypto.randomBytes(64).toString("base64");
  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 100, 10, "sha512")
    .toString("base64");

  let values = [hashPassword, salt, email];
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    } else {
      return res.status(StatusCodes.OK).json(results);
    }
  });
};
module.exports = { join, login, passwordResetRequest, passwordReset, check};
