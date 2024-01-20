const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");
// import "dotenv/config";
const envConfig = require("../../../config/config");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "please enter your  name"],
  },

  username: {
    type: String,
    unique: true,
    required: [true, "please Enter Your username"],
  },

  email: {
    type: String,
    unique: true,
    lowercase: [true, "email already exists!"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "please add a valid email",
    ],
  },

  password: {
    type: String,
    required: [true, "please Enter Your password"],
  },

  role: {
    type: String,
    required: [true, "please Add a role"],
    enum: ["Admin", "Employee"],
  },

  status: {
    type: Boolean,
    default: true,
  },
});

// encript is LockManager, passorid bcrypt
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

// jwt by token
userSchema.methods.getSignJwtToken = function () {
  return jwt.sign(
    { _id: this._id, username: this.username },
    envConfig.JWT_SECRET,
    {
      expiresIn: envConfig.JWT_EXPIRES,
    }
  );
};

// hash password by conpare
userSchema.methods.mathchPassword = async function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

module.exports = model("users", userSchema);
