const CustomError = require('$/errors/custom-error');

class ServiceError extends CustomError {
  constructor(statusCode, message) {
    super(statusCode, message || 'Some service error occured!');
  }
}

module.exports = ServiceError;
