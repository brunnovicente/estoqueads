import express from 'express'
const app = express() 
import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

/*CONFIGURAÇÃO DA PASTA ESTATICA*/
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'public')))

/**CONFIGURAÇÃO DA VISÃO */
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

/**ROTAS DO SISTEMA */
app.get('/', function(req, res){
    
    var aluno = {
        nome: 'Fulaninho',
        nota: 7.5
    }

    res.render('admin/index', {aluno})
})

app.get('/contato', function (req, res){
    res.render('admin/contato')
})

app.listen(3000, ()=> console.log('Servidor truando em http://localhost:3000'))