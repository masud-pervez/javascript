const asyncHandler = require("../../../middlewares/async.middleware");
const cookiesResponse = require("../../../middlewares/cookies.middleware");
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
// @route /api/v1/auth/users
// @access public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const results = await User.find(); //populate is relation array data

  return res.status(200).json({
    success: true,
    msg: "Get all users",
    data: results,
  });
});

// @desc RGet a single user
// @route /api/v1/auth/users/:id
// @access private
exports.getUser = asyncHandler(async (req, res, next) => {
  const result = await User.findById({ _id: req.params.id }).populate(
    "products"
  ); //populate is relation array data

  return res.status(200).json({
    success: true,
    msg: "Get a user",
    data: result,
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

  cookiesResponse(token, res);

  return res.status(200).json({
    success: true,
    msg: "login Successfull",
    data: oldUser,
    accessToken: token,
  });
});

// @desc logout User
// @route /api/v1/auth/logout
// @access private

exports.logout = asyncHandler(async (req, res, next) => {
  // const { username, password } = req.body;
  console.log("req.cookies", req);
  // Object.entries(req.cookies).forEach(([key, value]) => res.clearCookie(key));

  return res.status(200).json({
    success: true,
    msg: "logout Successfull",
    data: null,
  });
});
// @desc Get me
// @route /api/v1/auth/me
// @access private

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById({ _id: req._id });
  if (!user) {
    throw new Error("Authorization is not Valid!");
  }

  return res.status(200).json({
    success: true,
    msg: "Get Me Successfull",
    data: user,
  });
});

// @desc delete a single user
// @route /api/v1/auth/users/:id
// @access public
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const result = await User.findOneAndDelete({ _id: req.params.id });

  if (!result) {
    throw new Error(`Resource not found of id #${req.params.id}`);
  }

  return res.status(200).json({
    success: true,
    msg: `Delete a user of id ${req.params.id}`,
    data: result,
  });
});
