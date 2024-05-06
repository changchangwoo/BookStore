/* 이창우 */

const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const ensureAuthorization = require("../auth.js");
const jwt = require("jsonwebtoken");

const allBooks = (req, res) => {
  let { category_id, news, limit, currentPage } = req.query;
  let offset = limit * (currentPage - 1);
  let values = [];
  let allBooksRes = {};
  let sql =
    "SELECT *, (SELECT count(*) FROM likes WHERE books.id=liked_book_id) AS likes FROM books";

  if (category_id && news) {
    sql +=
      " WHERE category_id=? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
    values = [category_id];
  } else if (category_id) {
    sql += " WHERE category_id=?";
    values = [category_id];
  } else if (news) {
    sql +=
      " WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
  }
  sql += " LIMIT ? OFFSET ?";
  values.push(parseInt(limit), offset);
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (results.length) {
      results.map(function (result) {
        result.pubDate = result.pub_date;
        delete result.pub_date;
      });
    } else return res.status(StatusCodes.BAD_REQUEST).end();
  });

  sql = "SELECT found_rows();";
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    let pagination = {};
    pagination.currentPage = parseInt(currentPage);
    pagination.totalCount = results[0]["found_rows()"];
    allBooksRes.pagination = pagination;

    return res.status(StatusCodes.OK).json(allBooksRes);
  });
};

const bookDetail = (req, res) => {
  // 로그인 상태가 아니면 => liked 빼고 보내주면 되고
  // 로그인 상태이면 => liked 추가해서 보내주면 된다

  let authorization = ensureAuthorization(req, res);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었다",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰이다...",
    });
  } else if (authorization instanceof ReferenceError) {
    let book_id = req.params.id;
    let sql = `SELECT *, (SELECT count(*) FROM likes 
WHERE liked_book_id=books.id) AS likes FROM books 
LEFT JOIN category ON books.category_id = category.category_id 
WHERE books.id = ?;`;
    let values = [book_id];
    conn.query(sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).send(results);
    });
  } else {
    sql = `SELECT *, (SELECT count(*) FROM likes 
WHERE liked_book_id=books.id) AS likes, 
(SELECT EXISTS (SELECT * FROM likes WHERE user_id=? AND liked_book_id=?)) 
AS liked FROM books LEFT JOIN category ON books.category_id = category.category_id 
WHERE books.id = ?;
`;
    let book_id = req.params.id;
    let values = [authorization.id, book_id, book_id];
    conn.query(sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).send(results);
    });
  }
};

module.exports = {
  allBooks,
  bookDetail,
};