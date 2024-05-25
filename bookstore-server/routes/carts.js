const express = require("express");
const router = express.Router();
const conn = require("../mariadb");
const {
  addToCart,
  getCartItems,
  removeCartItem,
} = require("../controller/CartController");
router.use(express.json());

router.post("/", addToCart); // 장바구니 담기
router.get("/", getCartItems); // 장바구니 아이템 조회
router.delete("/", removeCartItem); // 장바구니 삭제

module.exports = router;
