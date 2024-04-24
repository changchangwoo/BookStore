/* 이창우 */

const maraidb = require("mysql2/promise");
const { StatusCodes } = require("http-status-codes");
const ensureAuthorization = require("../auth.js");
const jwt = require("jsonwebtoken");

const order = async (req, res) => {
  const conn = await maraidb.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "bookstore",
    dateStrings: true,
  });

  let authorization = ensureAuthorization(req, res);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었다",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰이다...",
    });
  } else {
    const { items, delivery, totalQuantity, totalPrice, firstBookTitle } =
      req.body;
    let delivery_id;
    let order_id;

    // delivery 테이블 삽입
    let values = [delivery.address, delivery.receiver, delivery.contact];
    let sql = `INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)`;
    let [results] = await conn.execute(sql, values);
    delivery_id = results.insertId;

    // orders 테이블 삽입
    sql = `INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) VALUES (?,?,?,?,?)`;
    values = [
      firstBookTitle,
      totalQuantity,
      totalPrice,
      authorization.id,
      delivery_id,
    ];
    [results] = await conn.execute(sql, values);
    order_id = results.insertId;

    // SELECT book_id, qunatity FROM cartItems WHERE IN (1,2,3);
    sql = `SELECT book_id, quantity FROM cartItems WHERE id IN (?)`;
    let [orderItems, fields] = await conn.query(sql, [items]);
    // orderdBook 테이블 삽입 테이블 삽입
    sql = `INSERT INTO orderdBook (order_id, book_id, quantity) VALUES ?;`;
    values = [];
    orderItems.forEach((item) => {
      values.push([order_id, item.book_id, item.quantity]);
    });
    results = await conn.query(sql, [values]);

    answer = await deleteCartItems(conn, items);
    console.log(answer);

    return res.status(StatusCodes.OK).json(answer);
  }
};

const deleteCartItems = async (conn, items) => {
  let sql = `DELETE FROM cartItems WHERE id IN (?)`;
  let result = await conn.query(sql, [items]);
  console.log(result[0]);
  return result;
};

const getOrders = async (req, res) => {
  let authorization = ensureAuthorization(req, res);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었다",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰이다...",
    });
  } else {
    const conn = await maraidb.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "1234",
      database: "bookstore",
      dateStrings: true,
    });

    sql = `SELECT orders.id, book_title, total_quantity, total_price, created_at,
    address, receiver, contact
    FROM orders LEFT JOIN delivery
    ON orders.delivery_id = delivery.id;`;
    let [rows, fields] = await conn.query(sql);
    return res.status(StatusCodes.OK).json(rows);
  }
};

const getOrderDetail = async (req, res) => {
  let orderId = req.params.id;
  const conn = await maraidb.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "bookstore",
    dateStrings: true,
  });

  sql = `SELECT book_id, title, author, price, quantity
    FROM orderdbook LEFT JOIN books
    ON orderdbook.book_id = books.id
    WHERE order_id = ?`;
  let [rows, fields] = await conn.query(sql, orderId);
  return res.status(StatusCodes.OK).json(rows);
};

module.exports = {
  order,
  getOrders,
  getOrderDetail,
};
