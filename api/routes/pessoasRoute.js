const { Router } = require('express')
const PessoaController = require ('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaPessoasAtivas)
router.get('/pessoas/todos', PessoaController.pegarTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
router.get('/pessoas/matricula/:turmaId/confirmados', PessoaController.pegaMatriculasPorTurma)
router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)

module.exports = router