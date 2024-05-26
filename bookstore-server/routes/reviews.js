const express = require("express");
const { getReview, addReview } = require("../controller/ReviewController");
const router = express.Router();

router.use(express.json());
router.get("/", getReview);
router.post("/", addReview);

module.exports = router;