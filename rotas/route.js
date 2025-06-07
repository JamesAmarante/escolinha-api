const { Router } = require("express");
const router = Router();//Buscar a instancia da variavel acima
const alunoService = require("../service/alunoService");
const professorService = require("../service/professorService");
const upload = require('../util/upload');
const alunoDTO = require('../model/dto/alunodto')

router.post("/aluno/", upload.single('foto'), async (req, res) => {
    let aluno = {...req.body,foto:req.file?.filename}
    console.log(aluno)
    aluno =     await alunoService.cadastrar(aluno)
    if (aluno)
        return res.status(201).json()
    return res.status(500).json()

});

router.put("/aluno/", upload.single('foto'), async (req, res) => {
    let aluno = req.body;
    console.log(req.body)
    if (req.file) aluno = {...aluno,foto:req.file?.filename}
    aluno = await alunoService.editar(aluno)
    if (aluno)
        return res.status(201).json()
    return res.status(500).json()
});

router.get("/aluno/:id", async (req, res) => {
    res.send(await alunoService.buscar(req.params.id));
});

router.delete("/aluno/:id", (req, res) => {
    res.send(alunoService.excluir(req.params.id));
});

router.get("/alunos/", async (req, res) => {
    const alunos = await alunoService.listar();
    res.send(alunoDTO.muitos(alunos));
});

// Rota abaixo serve para o login do usuario.

router.post("/professor/login", async (req, res) => {
    const professor = await professorService.login(req.body)
    if (professor)
        return res.status(200).json()
    return res.status(404).json()

});

module.exports = router;