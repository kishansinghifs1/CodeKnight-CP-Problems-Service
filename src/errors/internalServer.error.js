const BaseError = require('./base.error.js');
const { StatusCodes } = require('http-status-codes');

class InternalServerError extends BaseError {
  constructor(details) {
    super(
      'InternalServerError',
      StatusCodes.INTERNAL_SERVER_ERROR,
      'An unexpected error occurred on the server',
      details
    );
  }
}

module.exports = InternalServerError;
