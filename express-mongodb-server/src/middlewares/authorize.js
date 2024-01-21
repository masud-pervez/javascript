// const userModel = require("../modules/auth/model/user.model");

// async function isAuthorize(req, res, next) {
//   const user = await userModel.findById({ _id: req._id });
//   console.log("🚀 ~ user:", user.role);

//   if (user && user.role === "Admin") {
//     return next();
//   } else {
//     return next({ statusCode: 401, message: "Authorize Faild!" });
//   }
// }

// module.exports = isAuthorize;
