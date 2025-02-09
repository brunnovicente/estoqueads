import Pessoa from "../models/Pessoa.js";
import {Op} from "sequelize";

class PessoaController {
     index = function (req, res) {
        Pessoa.findAll({
            where:{
                status: 1
            },
            order:[['nome','asc']],
        }).then((pessoas) => {
            res.render('pessoa/index', {pessoas: pessoas});
        })
    }

    cadastrar = async function (req, res) {
        let pessoa = await Pessoa.findOne({
            where:{
                [Op.or]:[
                    {cpf: req.body.cpf},
                    {email: req.body.email}
                ]
            }
        })

        if(pessoa){
            res.redirect('/pessoa/cadastro')
        }else{
            let novo = {
                nome: req.body.nome,
                telefone: req.body.telefone,
                email: req.body.email,
                cpf: req.body.cpf,
                status: 1
            }
            Pessoa.create(novo).then(function(pessoa) {
                res.redirect('/pessoa')
            })
        }
    }//Fim do cadastro
}


export default new PessoaController()