const bcrypt = require('bcryptjs');
const { Sequelize, sequelize } = require("../../../config/db");

const User = sequelize.define('users', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Name can not be null" },
      notEmpty: { msg: "Name can not be empty" },
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Email can not be null" },
      isEmail: { msg: "Not a valid email" }
    },
    unique: {
      args: true,
      msg: 'Email address already in use!'
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Password can not be null" },
      notEmpty: { msg: "Password can not be empty" },
      len: {
        min: 6,
        msg: "At least 6 character long"
      }
    }
  },
  // resetPasswordToken: Sequelize.STRING,
  // resetPasswordExpire: Sequelize.STRING,
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Phone can not be null" },
      notEmpty: { msg: "Phone can not be empty" },
      is: {
        args: /^(?:\+88|01)?(?:\d{11}|\d{13})$/i,
        msg: "Not a vaild phone number"
      }
    }
  },
  role: {
    type: Sequelize.ENUM,
    values: ['Supar Admin', 'Admin', 'Operator', 'User'], // Suprer admin can only be set manually
    defaultValue: 'User'
  },
  status: {
    type: Sequelize.ENUM,
    values: ['Pending', 'Active', 'Inactive'],
    defaultValue: 'Active'
  }


})

// Encrypt password using bcrypt
User.beforeSave(async user => {
  // console.log(user.name, user.password, user.dataValues, user._changed.password)
  // if (!user._changed.password) {
  //     next();
  // }
  console.log("user", user);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
})



module.exports = User;