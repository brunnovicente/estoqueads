import Pessoa from '../models/Pessoa.js'

class PessoaController{

    index = async function(req, res){
        let pessoas = await Pessoa.findAll()
        res.render('pessoa/index', {pessoas: pessoas})
    } 

    cadastrar = function(req, res){
        res.render('pessoa/cadastro')
    }

}

export default new PessoaController()