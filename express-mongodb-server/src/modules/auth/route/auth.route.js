const express = require("express");
const {
  register,
  login,
  getUsers,
  getMe,
  getUser,
  deleteUser,
  logout,
  forgetPassword,
  forgotPassword,
  resetPassword,
  updatePassword,
  updateUser,
} = require("../controller/auth.controller");
const {
  AuthGuard,
  isAuthorize,
} = require("../../../middlewares/auth.middleware");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(AuthGuard, getMe);
router.route("/update-password").put(AuthGuard, updatePassword);
router.route("/forgot-password").post(AuthGuard, forgotPassword);
router.route("/reset-password/:token").post(AuthGuard, resetPassword);
router.route("/users").get(AuthGuard, isAuthorize, getUsers);
router
  .route("/users/:id")
  .get(AuthGuard, getUser)
  .put(AuthGuard, updateUser)
  .delete(AuthGuard, deleteUser);

router.route("/logout").delete(AuthGuard, logout);

module.exports = router;
