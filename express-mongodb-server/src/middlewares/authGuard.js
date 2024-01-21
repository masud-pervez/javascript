const jwt = require("jsonwebtoken");
const AuthGuard = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
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

module.exports = AuthGuard;
