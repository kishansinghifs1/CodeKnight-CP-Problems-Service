const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class BadRequestError extends BaseError {
  constructor(propertyName, details) {
    const description = `Invalid Structure For The ${propertyName || 'Field'} Provided`;
    super('BadRequestError', StatusCodes.BAD_REQUEST, description, details);
  }
}

module.exports = BadRequestError;
