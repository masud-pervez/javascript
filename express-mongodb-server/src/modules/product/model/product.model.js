const { Schema, model } = require("mongoose");

const productModel = new Schema({
  name: {
    type: String,
    require: [true, "product name is Required"],
  },
  price: Number,
  qty: Number,
  category: String,
  slug: String,
  description: String,
  status: {
    type: Boolean,
    default: true,
  },
  // user: {
  //   type: Schema.Types.ObjectId, //this is relation you can single user by data populate
  //   ref: "users",
  // },
});

//custom instance method
productModel.methods.findActive = function () {
  return this.model("products").find({ status: true }); ////custom instance method
};

//custom static method we can get just model name. method dile access korte parbo
productModel.statics.findByName = function () {
  return this.find({ name: /product/i });
};

// custom query helper
productModel.query.queryhelper = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

module.exports = model("products", productModel);
