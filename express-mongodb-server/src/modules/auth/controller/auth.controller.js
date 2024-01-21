const asyncHandler = require("../../../middlewares/async.middleware");
const User = require("../model/user.model");

// @desc Register User
// @route /api/v1/auth/register
// @access public
exports.register = asyncHandler(async (req, res, next) => {
  const findUser = await User.findOne({ username: req.body.username });

  if (findUser) {
    throw new Error("User already registered");
  }
  const newUser = await User.create(req.body);
  const token = newUser.getSignJwtToken();

  return res.status(200).json({
    success: true,
    msg: "Create a new Register",
    data: newUser,
    accessToken: token,
  });
});

// @desc Register User
// @route /api/v1/auth/register
// @access public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const results = await User.find().populate("products"); //populate is relation array data

  return res.status(200).json({
    success: true,
    msg: "Get all users",
    data: results,
  });
});

// @desc Login User
// @route /api/v1/auth/login
// @access public

exports.login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  const oldUser = await User.findOne({ username });

  if (!oldUser) {
    throw new Error(`username ${username} not find `);
  }

  const isMatch = await oldUser.mathchPassword(password);

  if (!isMatch) {
    throw new Error("Authorization is not Valid!");
  }

  const token = oldUser.getSignJwtToken();

  return res.status(200).json({
    success: true,
    msg: "login Successfull",
    data: oldUser,
    accessToken: token,
  });
});

// @desc Login User
// @route /api/v1/auth/login
// @access public

exports.getMe = asyncHandler(async (req, res, next) => {
  console.log("🚀 ~ req:", req)

  return res.status(200).json({
    success: true,
    msg: "login Successfull",
    data: {},
  });
});
