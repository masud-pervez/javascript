class ErrorResponse extends Error {
  constructor(message, statusCode, option) {
    super(message);
    this.statusCode = statusCode;

    if (option && option.name === "JoiValidationError") {
      this.joiValidationErrors = option.error;
    }
    if (option && option.name === "CustomError") {
      this.customErrors = option.errors || {};
    }

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorResponse;
