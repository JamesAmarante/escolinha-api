const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(`${process.env.DB}`, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {},
});

module.exports = sequelize
