
async function isAuthorize(req, res, next) {
  try {
    if (req.role === "Admin") {
      return next();
    } else {
      return next({ statusCode: 401, message: "Authorize Faild!" });
    }
  } catch (err) {
    return next({ statusCode: 401, message: "Authorize Faild!" });
  }
}

module.exports = isAuthorize;
