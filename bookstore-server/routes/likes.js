/* 이창우 */

const express = require("express");
const router = express.Router();
const { addLike, removeLike, checkLike } = require("../controller/LikeController");

router.use(express.json());

router.post("/", addLike);
router.delete("/:id", removeLike);
router.get("/:id", checkLike)

module.exports = router;
