const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserController{

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 10;
    for(let i = 0; i < limit; i++){
      this.users.push({
        id: i+1,
        firstName: faker.name.findName(),
        secondName: faker.name.findName(),
        lastName: faker.name.findName(),
        secondSurname: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        isActive: faker.datatype.boolean(),
      });
    }
  }

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
