const ProductModel = require("../model/product.model");
const userSchema = require("../../auth/model/user.model");
const asyncHandler = require("../../../middlewares/async.middleware");

// @desc Get all Product
// @route /api/v1/Product
// @access public
exports.getProducts = asyncHandler(async (req, res, next) => {
  //populate is relation data
  const results = await ProductModel.find().populate("user", "name username");
  return res.status(200).json({
    success: true,
    msg: "Get all Product",
    data: results,
  });
});

// @desc Get a single Product
// @route /api/v1/Product/:id
// @access public

exports.getProduct = asyncHandler(async (req, res, next) => {
  // try {
  const result = await ProductModel.findById({ _id: req.params.id });

  if (!result) {
    throw new Error(`Resource not found of id #${req.params.id}`);
  }

  return res.status(200).json({
    success: true,
    msg: `Get a single Product  of id ${req.params.id}`,
    data: result,
  });
});

// @desc create a single Product
// @route /api/v1/Product/:id
// @access public

exports.createProduct = asyncHandler(async (req, res, next) => {
  const result = await ProductModel.create({ ...req.body, user: req._id }); // intert user id

  await userSchema.updateOne(
    { _id: req._id }, // push product id to user collecton if you get user then you can see array object
    {
      $push: {
        products: result._id,
      },
    }
  );

  return res.status(200).json({
    success: true,
    msg: "Create a new Product",
    data: result,
  });
});

// @desc update a single Product
// @route /api/v1/Product/:id
// @access public

exports.updateProduct = asyncHandler(async (req, res, next) => {
  const updateData = await ProductModel.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  );
  return res.status(200).json({
    success: true,
    msg: `Update a single Product of id ${req.params.id}`,
    data: updateData,
  });
});

// @desc Get a single Active Product
// @route /api/v1/Product/active
// @access public
exports.getActiveProducts = asyncHandler(async (req, res, next) => {
  const activeProduct = new ProductModel();
  const results = await activeProduct.findActive();

  if (!results) {
    throw new Error(`Resource not found of id #${req.params.id}`);
  }

  return res.status(200).json({
    success: true,
    msg: `Get a Active product ${req.params.id}`,
    data: results,
  });
});

// @desc Get a Product
// @route /api/v1/Product/findbyname
// @access public

exports.getFindByName = asyncHandler(async (req, res, next) => {
  const results = await ProductModel.findByName();

  if (!results) {
    throw new Error(`Resource not found of id #${req.params.id}`);
  }

  return res.status(200).json({
    success: true,
    msg: `Find by product name ${req.params.id}`,
    data: results,
  });
});

// @desc queryhelper
// @route /api/v1/Product/queryhelper
// @access public

exports.getQueryHelper = asyncHandler(async (req, res, next) => {
  const results = await ProductModel.find().queryhelper("react");

  if (!results) {
    throw new Error(`Resource not found of id #${req.params.id}`);
  }

  return res.status(200).json({
    success: true,
    msg: `Query by product name ${req.params.id}`,
    data: results,
  });
});

// @desc delete a single Product
// @route /api/v1/Product/:id
// @access public
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const result = await ProductModel.deleteOne({ _id: req.params.id });

  if (!result) {
    throw new Error(`Resource not found of id #${req.params.id}`);
  }

  return res.status(200).json({
    success: true,
    msg: `Delete a sinle Product  of id ${req.params.id}`,
    data: result,
  });
});
