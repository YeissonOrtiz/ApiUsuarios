const bcrypt = require('bcryptjs');

const { models } = require('../libs/sequelize');

class UserController{

  async create(data){
    const newUser = await models.User.create(data);
    return newUser;
  }

  async getAll(){
    const users = await models.User.findAll({order: [['id', 'ASC']]});
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

  async login($data){
    const password = $data.password;
    const email = $data.email;

    const user = await models.User.findOne({
      where: {
        email,
        password,
      },
    });

    bcrypt.compare(password, user.password).then((result) => {
      if (result) {
        return {
          message: true,
        };
      }else{
        return {
          message: false,
        };
      }
    });
  }

}

module.exports = UserController;
