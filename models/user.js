'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    fullName: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    phone: DataTypes.STRING,
    isActive: DataTypes.INTEGER,
    username: DataTypes.STRING,
    userIP: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return user;
};