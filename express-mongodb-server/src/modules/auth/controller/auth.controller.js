const { v4: uuidv4 } = require("uuid");
const asyncHandler = require("../../../middlewares/async.middleware");
const {
  sendCookiesResponse,
  hashedPassword,
} = require("../../../middlewares/auth.middleware");
const sendEmail = require("../../../middlewares/sendMail.middleware");
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

  if (!newUser) {
    throw new Error("User Create not successfull");
  }

  const token = newUser.getSignJwtToken();
  sendCookiesResponse(token, res);

  return res.status(200).json({
    success: true,
    msg: "Create a new Register",
    data: newUser,
    accessToken: token,
  });
});

// @desc Get Users
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

// @desc Get a single user
// @route /api/v1/auth/users/:id
// @access private
exports.getUser = asyncHandler(async (req, res, next) => {
  const result = await User.findById({ _id: req.params.id }).populate(
    "products"
  ); //populate is relation array data

  if (!result) {
    throw new Error("User is not found");
  }

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

  const isMatch = await oldUser.matchPassword(password);

  if (!isMatch) {
    throw new Error("Authorization is not Valid!");
  }
  const token = oldUser.getSignJwtToken();

  sendCookiesResponse(token, res);

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
  Object.entries(req.cookies).forEach(([key, value]) => res.clearCookie(key));

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

// @desc Forget password
// @route /api/v1/auth/forgot-password
// @access private
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const token = uuidv4();
  const user = await User.findOneAndUpdate(
    { email },
    {
      $set: {
        resetToken: token,
        resetTokenExpire: Date.now() + 3600000, // token expires after one hour
      },
    }
  );

  if (!user) {
    throw new Error("User with this email does not exist");
  }

  const resetUrl = `${req.protocol}://${req.hostname}/reset-password/${token}`; // your reset password page

  let mailOptions = {
    to: user.email,
    from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
    subject: "Password Reset",
    text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account. Please click on the following link, or paste it into your browser to complete the process within one hour of receiving it: ${resetUrl}`,
  };

  await sendEmail(mailOptions);

  return res.status(200).json({
    success: true,
    msg: "Forget password successfull. please check your email address",
    data: {},
  });
});

// @desc Reset password
// @route /api/v1/auth/reset-password
// @access private

exports.resetPassword = asyncHandler(async (req, res, next) => {
  const { password } = req.body;
  const { token } = req.params;

  const newPassword = await hashedPassword(password);

  const user = await User.findOneAndUpdate(
    {
      resetToken: token,
      resetTokenExpire: { $gt: Date.now() },
    },
    {
      $set: { password: newPassword, resetToken: null, resetTokenExpire: null },
    }
  );

  if (!user) {
    return res.status(400).send({ message: "Invalid or expired reset token" });
  }

  return res.status(200).json({
    success: true,
    msg: "Reset password",
    data: {},
  });
});

// @desc update password
// @route /api/v1/auth/update-password
// @access private

exports.updatePassword = asyncHandler(async (req, res, next) => {
  const { newPassword, currentPassword } = req.body;
  const user = await User.findById(req._id).select("password");

  if (!user) {
    throw new Error("user not found");
  }

  if (!newPassword || !(await user.matchPassword(currentPassword))) {
    throw new Error("Password is not currect");
  }

  const password = await hashedPassword(newPassword);

  const newUser = await User.findOneAndUpdate(
    {
      _id: user._id,
    },
    {
      $set: { password },
    }
  );

  return res.status(200).json({
    success: true,
    msg: "update password",
    data: newUser,
  });
});

// @desc Update a single user
// @route /api/v1/auth/users/:id
// @access public
exports.updateUser = asyncHandler(async (req, res, next) => {
  const updateData = await User.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  );

  return res.status(200).json({
    success: true,
    msg: `Update a User of id ${req.params.id}`,
    data: updateData,
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
