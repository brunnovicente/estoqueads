import Produto from "../models/Produto.js"

class ProdutoController{
    index = async function(req, res){
        const produtos = await Produto.findAll()
        res.render('produto/index', {produtos: produtos})
    }
}

export default new ProdutoController()