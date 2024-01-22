const express = require("express");
const router = express.Router();
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controller/bootcamp.controller");
const { AuthGuard } = require("../../../middlewares/auth.middleware");

router.route("/").get(AuthGuard, getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .get(AuthGuard, getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
