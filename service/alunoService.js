const Aluno = require('../model/entity/aluno') //Estou importando a entidade aluno para utilizar os metodos.
const { Op } = require('sequelize')

const AlunoService = {
    cadastrar: async (aluno) => {
        try {
            const user = await Aluno.create(aluno);
            return user;

        } catch (erro) {
            console.log(`O ERRO ESTOUROU AQUI ${erro}`)
            return undefined
        }
    },

    editar: async (aluno) => {
        try {
           return await Aluno.update(aluno, {
            where: {
                id: aluno.id
            }
        }) 
        } catch {
            return undefined;
        }
        
    },

    excluir: async (chave) => {
        return await Aluno.destroy({
            where: {
                id: chave
            }
        })

    },
    
    listar: async () => {
        return await Aluno.findAll()
    },

    buscar: async (id) => {
        return await Aluno.findOne({
            where: {
                id: Number(id)
            }
        })
    }
}

module.exports = Object.create(AlunoService);
