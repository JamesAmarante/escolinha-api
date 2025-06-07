const AlunoDTO = {


    muitos: (alunos) => {
        return alunos.map(al => {
            return {
                id: al.id,
                nome: al.nome,
                foto: al.foto == undefined ? null : `https://escolinha-api.onrender.com/${al.foto}`
            }
        })

    },

}

module.exports = Object.create(AlunoDTO);
