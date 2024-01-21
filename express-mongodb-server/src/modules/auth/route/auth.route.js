const express = require("express");
const {
  register,
  login,
  getUsers,
  getMe,
} = require("../controller/auth.controller");
const AuthGuard = require("../../../middlewares/authGuard");
const isAuthorize = require("../../../middlewares/authorize");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", AuthGuard, isAuthorize, getUsers);
router.get("/me", AuthGuard, getMe);

module.exports = router;
