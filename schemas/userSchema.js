const Joi = require('joi');

const firstName = Joi.string().min(3);
const secondName = Joi.string().min(3).allow(null);
const firstSurname = Joi.string().min(3);
const secondSurname = Joi.string().allow(null);
const email = Joi.string().email();
const password = Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/);

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  secondName: secondName,
  firstSurname: firstSurname.required(),
  secondSurname: secondSurname,
  email: email.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  firstName: firstName,
  secondName: secondName,
  firstSurname: firstSurname,
  secondSurname: secondSurname,
  email: email,
  password: password,
});

const oneUserSchema = Joi.object({
  id: Joi.number().required(),
});

module.exports = { createUserSchema, updateUserSchema, oneUserSchema };
