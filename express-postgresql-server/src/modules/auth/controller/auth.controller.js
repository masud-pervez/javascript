const jwt = require("jsonwebtoken");
const asyncHandler = require("../../../middlewares/async.middleware");
const ErrorResponse = require("../../../utils/errorResponse");
const User = require("../model/user.model");
const config = require("../../../config/config");
const { getSignJwtToken } = require("../../../middlewares/auth.middleware");

// @desc Register User
// @route /api/v1/auth/register
// @access public
exports.register = asyncHandler(async (req, res, next) => {
  const findUser = await User.findOne({ name: req.body.name });

  if (findUser) {
    throw new ErrorResponse("user Already");
  }
  const user = await User.create(req.body);

  console.log("findUser", findUser);

  const token = getSignJwtToken();

  return res.status(200).json({
    success: true,
    msg: "Create a new Register",
    data: user,
    token: token,
  });
});

// const getSignJwtToken = () => {
//   return jwt.sign({}, config.JWT_SECRET, {
//     expiresIn: config.JWT_EXPIRES,
//   });
// };

const matchPassword = function (enterPassword, user) {
  return bcrypt.compare(enterPassword, user.password);
};
