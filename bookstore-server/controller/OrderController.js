const { conn, asynConn } = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const ensureAuthorization = require("../auth.js");
const jwt = require("jsonwebtoken");

const order = async (req, res) => {
  try {
    let authorization = ensureAuthorization(req, res);

    if (authorization instanceof jwt.TokenExpiredError) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "로그인 세션이 만료되었습니다.",
      });
    } else if (authorization instanceof jwt.JsonWebTokenError) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "잘못된 토큰입니다.",
      });
    } else {
      const { items, delivery, totalQuantity, totalPrice, firstBookTitle } = req.body;

      console.log(items, delivery, totalQuantity, totalPrice, firstBookTitle);
      let delivery_id;
      let order_id;

      // delivery 테이블 삽입
      let values = [delivery.address, delivery.name, delivery.contact];
      let sql = `INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)`;
      let [results] = await asynConn.execute(sql, values);
      delivery_id = results.insertId;
      console.log(delivery_id);

      // orders 테이블 삽입
      sql = `INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) VALUES (?,?,?,?,?)`;
      values = [
        firstBookTitle,
        totalQuantity,
        totalPrice,
        authorization.id,
        delivery_id,
      ];
      [results] = await asynConn.execute(sql, values);
      order_id = results.insertId;

      // SELECT book_id, quantity FROM cartItems WHERE id IN (1,2,3);
      sql = `SELECT book_id, quantity FROM cartItems WHERE id IN (?)`;
      let [orderItems, fields] = await asynConn.query(sql, [items]);
      // orderdBook 테이블 삽입
      sql = `INSERT INTO orderdbook (order_id, book_id, quantity) VALUES ?;`;
      values = [];
      orderItems.forEach((item) => {
        values.push([order_id, item.book_id, item.quantity]);
      });
      results = await asynConn.query(sql, [values]);

      let answer = await deleteCartItems(asynConn, items);
      console.log(answer);

      return res.status(StatusCodes.OK).json(answer);
    }
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "주문 처리 중 오류가 발생했습니다.",
      error: error.message,
    });
  }
};

const deleteCartItems = async (asynConn, items) => {
  try {
    let sql = `DELETE FROM cartItems WHERE id IN (?)`;
    let result = await asynConn.query(sql, [items]);
    console.log(result[0]);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("장바구니 항목 삭제 중 오류가 발생했습니다.");
  }
};

const getOrders = async (req, res) => { // 주문목록 전체 출력
  try {
    let authorization = ensureAuthorization(req, res);

    if (authorization instanceof jwt.TokenExpiredError) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "로그인 세션이 만료되었습니다.",
      });
    } else if (authorization instanceof jwt.JsonWebTokenError) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "잘못된 토큰입니다.",
      });
    } else {
      let sql = `SELECT orders.id, book_title, total_quantity, total_price, created_at,
      address, receiver, contact
      FROM orders LEFT JOIN delivery
      ON orders.delivery_id = delivery.id
      WHERE user_id = ?;`;

      let [rows, fields] = await asynConn.query(sql, authorization.id);
      return res.status(StatusCodes.OK).json(rows);
    }
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "주문 목록을 가져오는 중 오류가 발생했습니다.",
      error: error.message,
    });
  }
};

const getOrderDetail = async (req, res) => { // 주문목록 상세 출력
  try {
    let orderId = req.params.id;

    let sql = `SELECT book_id, title, author, price, quantity
      FROM orderdbook LEFT JOIN books
      ON orderdbook.book_id = books.id
      WHERE order_id = ?`;
    let [rows, fields] = await asynConn.query(sql, orderId);
    return res.status(StatusCodes.OK).json(rows);
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "주문 상세 정보를 가져오는 중 오류가 발생했습니다.",
      error: error.message,
    });
  }
};

module.exports = {
  order,
  getOrders,
  getOrderDetail,
};
