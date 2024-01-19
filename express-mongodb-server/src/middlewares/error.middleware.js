const ErrorResponse = require("../utils/errorResponse");

// 400 - Bad Request, , 404 - Not Found, 500 - Internal Server Error

const errorHandler = async (err, req, res, next) => {
  let error = { ...err }, errors = {};

  // if(req.sequelizeTranSession){
  //   await req.sequelizeTranSession.rollback();
  //   console.log("Rollback Transaction");
  // }

  error.message = err.message;
  // return res.send(err);

  // Log to console for dev
  console.log(`${err}`.red);

  if(req.originalUrl==='/api/v1/auth/login'){
    Object.entries(req.cookies).forEach(([key,value])=>res.clearCookie(key));
  }

  // custom errors
  if(err.customErrors){
    // const message = `Validation Error`;
    errors = err.customErrors;
  }

  // custom errors handled using joi
  if(err.joiValidationErrors){
    err.joiValidationErrors.details.forEach(({path,message}) => errors[path]=message);
    error = new ErrorResponse("Validation Error", 400);
  }


  console.log(`${error.statusCode || 500} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
    errors
  });
};

module.exports = errorHandler;
