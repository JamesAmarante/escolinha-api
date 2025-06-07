const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'escolinha',
  username: 'postgres',
  password: '123',
  host: 'localhost',
  port: '5432'
});

module.exports = sequelize