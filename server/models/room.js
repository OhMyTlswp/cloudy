const DataTypes = require('sequelize');
const sequelize = require('../db');

const roomModel = sequelize.define(
  'rooms',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    avatar: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  },
);

module.exports = roomModel;
