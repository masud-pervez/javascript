const asyncHandler = require("../../../middlewares/async.middleware");
const ErrorResponse = require("../../../utils/errorResponse");
const bootcampModel = require("../model/bootcamp.model");

// @desc Get all bootcamp
// @route /api/v1/bootcamp
// @access public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await bootcampModel.find();

  return res.status(200).json({
    success: true,
    msg: "Show all bootcamp",
    data: bootcamps,
  });
});

// @desc Get a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampModel.findOne({ _id: req.params.id });

  if (!bootcamp) {
    throw new ErrorResponse(`Resource not found of id #${req.params.id}`);
  }

  return res.status(200).json({
    success: true,
    msg: `Get a single bootcamp  of id ${req.params.id}`,
    data: bootcamp,
  });
});

// @desc create a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampModel.create(req.body);

  return res.status(200).json({
    success: true,
    msg: "Create a new bootcamp",
    data: bootcamp,
  });
});

// @desc update a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const updateData = await bootcampModel.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  );

  return res.status(200).json({
    success: true,
    msg: `Update a single bootcamp of id ${req.params.id}`,
    data: updateData,
  });
});

// @desc delete a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampModel.deleteOne({ _id: req.params.id });
  console.log("🚀 ~ bootcamp:", bootcamp);

  if (!bootcamp) {
    throw new ErrorResponse(`Resource not found of id #${req.params.id}`);
  }

  return res.status(200).json({
    success: true,
    msg: `Delete a sinle bootcamp  of id ${req.params.id}`,
    data: bootcamp,
  });
});
