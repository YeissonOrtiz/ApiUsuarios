const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  firstName: {
    type: DataTypes.STRING,
    field: 'first_name',
    allowNull: false,
  },

  secondName: {
    type: DataTypes.STRING,
    field: 'second_name',
    allowNull: true,
  },

  firstSurname: {
    type: DataTypes.STRING,
    field: 'first_surname',
    allowNull: false,
  },

  secondSurname: {
    type: DataTypes.STRING,
    field: 'second_surname',
    allowNull: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  isActive: {
    type: DataTypes.BOOLEAN,
    field: 'is_active',
    allowNull: false,
    defaultValue: true,
  },
}

class User extends Model{
  static assocciate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    }
  }

}

module.exports = { USER_TABLE, User, UserModel }
