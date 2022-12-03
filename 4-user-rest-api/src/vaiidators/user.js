const Joi = require('joi')

const validateCreateUser = (payload) => {
  const schema = Joi.object({
    Id: Joi.string().required(),
    Name: Joi.string().required(),
    Email: Joi.string().email().required(),
  });

  return schema.validate(payload);
};

const validateQueryFilter = (payload) => {
  const schema = Joi.object({
    Name: Joi.string().optional(),
    Email: Joi.string().email().optional(),
  });

  return schema.validate(payload);
};

const validateId = (payload) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  return schema.validate(payload);
};

module.exports = { validateCreateUser, validateQueryFilter, validateId };
