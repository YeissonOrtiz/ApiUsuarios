const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserController{

  async create(data){
    const newUser = await models.User.create(data);
    return newUser;
  }

  async getAll(){
    const users = await models.User.findAll();
    return users;
  }

  async getById(id){
    const user = await models.User.findByPk(id);
    return user;
  }

  async update(id, data){
    const user = await this.getById(id);
    const updated = user.update(data);
    return updated;
  }

  async deleteById(id){
    const user = await this.getById(id);
    user.update({ isActive: false });
    return user;
  }
}

module.exports = UserController;
