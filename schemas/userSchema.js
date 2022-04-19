const Joi = require('joi');

const name = Joi.string().min(3);
const email = Joi.string().email();
const password = Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/);

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password,
});

const oneUserSchema = Joi.object({
  id: Joi.number().required(),
});

module.exports = { createUserSchema, updateUserSchema, oneUserSchema };
