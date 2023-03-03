const validator = require('validator');

const validateRole = ({ name, description }) => {
  const errors = [];

  if (validator.isEmpty(name)) {
    errors.push('name cannot be empty');
  }
  if (validator.isEmpty(description)) {
    errors.push('description cannot be empty');
  }

  return errors;
};

module.exports = {
  validateRole,
};
