const express = require("express");
const {
  register,
  login,
  getUsers,
  getMe,
} = require("../controller/auth.controller");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/users").get(getUsers);
router.route("/me").get(getMe);

module.exports = router;
