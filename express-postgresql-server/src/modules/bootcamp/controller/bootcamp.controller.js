const asyncHandler = require("../../../middlewares/async.middleware");
const ErrorResponse = require("../../../utils/errorResponse");
const bootcampModel = require("../model/bootcamp.model");

// @desc Get all bootcamp
// @route /api/v1/bootcamp
// @access public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await bootcampModel.findAll()
   return res.status(200).json({
        success: true,
        msg: "Show all bootcamp",
        data: bootcamps
    })
});


// @desc Get a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await bootcampModel.findByPk(req.params.id);

    if (!bootcamp) {
        throw new ErrorResponse(`Resource not found of id #${req.params.id}`)
    }

   return res.status(200).json({
        success: true,
        msg: `Get a single bootcamp  of id ${req.params.id}`,
        data: bootcamp
    })
})

// @desc create a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.createBootcamp = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const bootcamp = await bootcampModel.create(req.body)

   return res.status(200).json({
        success: true,
        msg: "Create a new bootcamp",
        data: bootcamp
    })
})


// @desc update a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.updateBootcamp = asyncHandler(async (req, res, next) => {

    const [rowsupdated, [updateBootcamp]] = await bootcampModel.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })


    return res.status(200).json({
        success: true,
        msg: `Update a single bootcamp of id ${req.params.id}`,
        data: updateBootcamp
    })
})

// @desc delete a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await bootcampModel.findByPk(req.params.id);

    if (!bootcamp) {
        throw new ErrorResponse(`Resource not found of id #${req.params.id}`)
    }

    await bootcamp.destroy()
  return  res.status(200).json({
        success: true,
        msg: `Delete a sinle bootcamp  of id ${req.params.id}`,
        data: bootcamp
    })
})


