/* 이창우 */

const { conn, asyncMySQL, asynConn } = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const ensureAuthorization = require("../auth.js");

const addLike = (req, res) => {
  let sql = `INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)`;
  const { id } = req.body;
  let authorization = ensureAuthorization(req);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었다",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰이다...",
    });
  } else {
    let values = [authorization.id, id];
    conn.query(sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(results);
    });
  }
};

const removeLike = (req, res) => {
  let sql = `DELETE FROM likes WHERE user_id =? AND liked_book_id =?`;
  const { id } = req.params
  let authorization = ensureAuthorization(req);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었다",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰이다...",
    });
  } else {
    let values = [authorization.id, id];
    conn.query(sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(results);
    });
  }
};

const checkLike = async (req, res) => {
  const { id } = req.params;
  let authorization = ensureAuthorization(req);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었다",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰이다...",
    });
  } else {
    try {
      const user_id = authorization.id;
      const sql = `SELECT * FROM likes WHERE user_id = ? AND liked_book_id = ?`;
      const values = [user_id, id];
      const [results] = await asynConn.query(sql, values);
      console.log(results)
      if (results.length > 0) {
        return res.status(StatusCodes.OK).json({ liked: true });
      } else {
        console.log(false)
        return res.status(StatusCodes.OK).json({ liked: false });
      }
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
  }
};

module.exports = { addLike, removeLike, checkLike };
