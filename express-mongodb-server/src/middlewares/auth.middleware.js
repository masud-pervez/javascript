const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

//authGuard
const AuthGuard = (req, res, next) => {
  const { authorization } = req.headers;
  let token = authorization?.split(" ")[1] || req.cookies.accessToken;

  if (!token) {
    next({ message: "Authentication Failed" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name, username, _id, role } = decoded;
    req.name = name;
    req.username = username;
    req.role = role;
    req._id = _id;
    next();
  } catch (err) {
    next({ message: "Authentication Failed" });
  }
};

//authorize api
async function isAuthorize(req, res, next) {
  try {
    if (req.role === "Admin") {
      return next();
    } else {
      return next({ statusCode: 401, message: "Authorize Faild!" });
    }
  } catch (err) {
    return next({ statusCode: 401, message: "Authorize Faild!" });
  }
}

//set cookies data
const sendCookiesResponse = (token, res) => {
  let options = {
    maxAge: 20 * 60 * 1000, // would expire in 20minutes
    // maxAge: '1d', // would expire in 20minutes
    httpOnly: true, // The cookie is only accessible by the web server
    secure: true,
  };
  res.status(200).cookie(process.env.COOKIE_NAME, token, options);
  // .json({ success: true, token }); // set the token to response header, so that the client sends it back on each subsequent request
};

const getSignJwtToken = () => {
  return jwt.sign({}, config.JWT_SECRET, {
    expiresIn: config.JWT_SECRET,
  });
};

const hashedPassword = (password) => {
  return bcrypt.hash(password, 10);
};

const mathchPassword = function (enterPassword, user) {
  return bcrypt.compare(enterPassword, user.password);
};

module.exports = {
  AuthGuard,
  isAuthorize,
  sendCookiesResponse,
  hashedPassword,
};
