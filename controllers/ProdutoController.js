import Produto from "../models/Produto.js"

class ProdutoController{
    index = async function(req, res){
        const produtos = await Produto.findAll()
        res.render('produto/index', {produtos: produtos})
    }

    cadastrar = function(req, res){
        res.render('produto/cadastrar')
    }

    salvar = function(req, res){
        let produto = {
            descricao: req.body.descricao,
            preco: req.body.preco,
            estoque: req.body.estoque,
            status: 1
        }

        Produto.create(produto).then(function(){
            res.redirect('/produto')
        })
    }
}

export default new ProdutoController()