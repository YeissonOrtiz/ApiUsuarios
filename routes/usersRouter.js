const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

const usersController = require('../controllers/usersController');
const controller = new usersController();
const validatorHandler = require('../middlewares/validatorHandler');
const { createUserSchema, updateUserSchema, oneUserSchema } = require('../schemas/userSchema');

router.get(
  '/',
  async (req, res, next) => {

  try {
    const users = await controller.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }

});

router.get(
  '/:id',
  validatorHandler(oneUserSchema, 'params'),
  async (req, res, next) => {

  try {
    const user = await controller.getById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }

});

router.post(
  '/create',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
  try {
    let password = req.body.password;
    password = await bcrypt.hash(password, 10);
    req.body.password = password;
    const user = await controller.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }

});


router.post(
  '/login',
  async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const message =  await controller.login({ email, password });
    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/edituser/:id',
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
  if (req.body.password) {
    let password = req.body.password;
    password = await bcrypt.hash(password, 10);
    req.body.password = password;
  }

  try {
    const user = await controller.update(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }

});

router.delete(
  '/delete/:id',
  validatorHandler(oneUserSchema, 'params'),
  async (req, res, next) => {

  try {
    const user = await controller.deleteById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }

});

module.exports = router;
