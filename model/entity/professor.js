const seque = require('../connection/conexao')// A variel está importando a variavel da rota do require.
const { DataTypes } = require('sequelize')// A variavel está impotando os tipos de dados que o banco possui

const Professor = seque.define(
    'professor',
    {
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        senha: {
            type: DataTypes.STRING,
            require: true
        }

    }
)

module.exports = Professor
