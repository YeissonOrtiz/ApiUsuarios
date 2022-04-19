const faker = require('faker');
const boom = require('@hapi/boom');

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
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        isActive: faker.datatype.boolean(),
      });
    }
  }

  async create(data){
    const newUser = {
      id: this.users.length,
      ...data,
      isActive: true,
    };
    this.users.push(newUser);
  }

  async getAll(){
    return this.users;
  }

  async getById(id){
    const user = this.users.find(user => user.id == id);
    if (!user) {
      return boom.notFound('User not found').message;
    }
    return user;
  }

  async update(id, data){
    const user = this.users.find(user => user.id == id);
    if(!user){
      return boom.notFound('User not found').message;
    }
    const index = this.users.indexOf(user);
    this.users[index] = {
      ...user,
      ...data
    };
    return this.users[index];
  }

  async deleteById(id){
    const user = this.users.find(user => user.id == id);
    if(!user){
      return boom.notFound('User not found').message;
    }
    user.isActive = false;
    return user;
  }
}

module.exports = UserController;
