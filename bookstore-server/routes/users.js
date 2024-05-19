const express = require("express");
const router = express.Router();
const conn = require("../mariadb");
const { body, validationResult } = require("express-validator");
const {
  join,
  login,
  passwordResetRequest,
  passwordReset,
  check,
  checkLogin
} = require("../controller/UserController.js");

const validate = (req, res, next) => {
  const err = validationResult(req);
  if (err.isEmpty()) {
    return next();
  } else {
    return res.status(200).json(err.array);
  }
};

router.use(express.json());

router.post("/join", join);
router.post("/login", login);
router.post("/check", check)
router.get("/check", checkLogin)
router.post("/reset", passwordResetRequest);
router.put("/reset", passwordReset);
module.exports = router;
