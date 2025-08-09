const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class UnimplementedError extends BaseError {
  constructor(featureName, details) {
    super(
      'UnimplementedError',
      StatusCodes.NOT_IMPLEMENTED, // 501
      `${featureName || 'This feature'} is not implemented yet`,
      details
    );
  }
}

module.exports = UnimplementedError;
