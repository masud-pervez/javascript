const jwt = require("jsonwebtoken");
const AuthGuard = (req, res, next) => {
  // console.log("🚀 ~ req:", req.headers);
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, _id } = decoded;
    req.username = username;
    req._id = _id;
    next();
  } catch (err) {
    next({ message: "Authentication Failed" });
  }
};

module.exports = AuthGuard;
