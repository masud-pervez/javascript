const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const config = require("./config");

const getSignJwtToken = () => {
  return jwt.sign({}, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRE,
  });
};

const matchPassword = function (enterPassword, user) {
  return bcrypt.compare(enterPassword, user.password);
};

module.exports = {
  getSignJwtToken,
  matchPassword,
};
