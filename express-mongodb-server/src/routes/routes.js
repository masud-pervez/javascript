const bootcamp = require("../modules/bootcamp/route/bootcamp.route");
const auth = require("../modules/auth/route/auth.route");
const product = require("../modules/product/route/product.route");
const AuthGuard = require("../middlewares/authGuard");

// all routes
module.exports = (app) => {
  app.use("/api/v1/bootcamp", AuthGuard, bootcamp);
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/products", AuthGuard, product);
};
