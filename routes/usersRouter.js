const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const controller = new usersController();
const validatorHandler = require('../middlewares/validatorHandler');
const { createUserSchema, updateUserSchema, oneUserSchema } = require('../schemas/userSchema');

router.get(
  '/login',
  async (req, res, next) => {
  try {
    const credentials = await controller.login();
    res.status(200).json(credentials);
  } catch (error) {
    next(error);
  }
});

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
    const user = await controller.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }

});

router.patch(
  '/edituser/:id',
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {

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
