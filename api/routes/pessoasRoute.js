const { Router } = require('express')
const PessoaController = require ('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegarTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)

module.exports = router