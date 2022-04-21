const { ValidationError } = require('sequelize');

const queryErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(409).json({
      status: 409,
      message: 'Bad Request',
      error: err.name,
      errormessage: err.errors
    });
  }
  next(err);
};

module.exports = queryErrorHandler;
