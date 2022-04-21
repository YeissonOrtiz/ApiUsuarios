const { User, UserModel } = require('./userModel');

function setupModels(sequelize){
  User.init(UserModel, User.config(sequelize));
}

module.exports = setupModels;
