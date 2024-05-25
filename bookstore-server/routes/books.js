const express = require("express");
const router = express.Router();
const conn = require("../mariadb");
const { allBooks, bookDetail, bestBooks, searchBooks } = require("../controller/BookController");

router.use(express.json());

router.get("/", allBooks);
router.get("/best", bestBooks)
router.get("/search", searchBooks)
router.get("/:id", bookDetail);


module.exports = router;
