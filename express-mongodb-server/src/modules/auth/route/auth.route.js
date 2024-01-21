const express = require("express");
const {
  register,
  login,
  getUsers,
  getMe,
  getUser,
  deleteUser,
  logout,
} = require("../controller/auth.controller");
const AuthGuard = require("../../../middlewares/authGuard");
const isAuthorize = require("../../../middlewares/authorize");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", AuthGuard, isAuthorize, getUsers);
router.get("/me", AuthGuard, getMe);
router.get("/users/:id", AuthGuard, getUser);
router.delete("/users/:id", AuthGuard, deleteUser);
router.delete("/logout", logout);

module.exports = router;
