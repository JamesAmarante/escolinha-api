const seque = require('../connection/conexao')// A variel está importando a variavel da rota do require.
const { DataTypes } = require('sequelize')// A variavel está impotando os tipos de dados que o banco possui
const Professor = require('./professor') // Aqui estou importando a variavel para relacionar a tabela aluno

const Aluno = seque.define(
    'aluno',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            require: true
        },
        foto: {
            type: DataTypes.STRING,
            require: false
        },
        dt_nasc: {
            type: DataTypes.DATEONLY,
            require: true
        },
        cpf: {
            type: DataTypes.STRING,
            require: false,
            unique: true
        },
        rg: {
            type: DataTypes.STRING,
            require: false
        },
        genero: {
            type: DataTypes.STRING,
            require: false
        },
        cont_resp: {
            type: DataTypes.STRING,
            require: false
        },
        nome_resp: {
            type: DataTypes.STRING,
            require: false
        },
        bairro: {
            type: DataTypes.STRING,
            require: false
        },
        cidade: {
            type: DataTypes.STRING,
            require: false
        },
        rua: {
            type: DataTypes.STRING,
            require: false
        },
        cep: {
            type: DataTypes.STRING,
            require: false
        }

    }, {timestamps:false}
)
Professor.hasMany(Aluno) // Definindo o tipo de relacionamento do banco entre as tabelas(Entidade.)
module.exports = Aluno

