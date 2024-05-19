const jwt = require("jsonwebtoken");
require("dotenv").config();


function ensureAuthorization(req, res) {
  try {
    let receivedJWT = req.cookies.token
    if (receivedJWT) {
      let decodedJWT = jwt.verify(receivedJWT, process.env.PRIVATE_KEY);
      return decodedJWT;
    } else {
      throw new ReferenceError("jwt must be provided");
    }
  } catch (err) {
    console.log(err.name);
    console.log(err.message);

    return err;
  }
}

module.exports = ensureAuthorization;
