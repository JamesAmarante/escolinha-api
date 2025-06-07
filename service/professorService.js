const Professor = require('../model/entity/professor') //Estou importando a entidade aluno para utilizar os metodos.

const ProfessorService = {
    login: async (professor) => {
        return await Professor.findOne({
            where: {
                email: professor.email,
                senha: professor.senha
            }
        })

    },

}

module.exports = Object.create(ProfessorService);