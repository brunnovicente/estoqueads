import express from 'express'
const app = express() 
import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import bodyParser from 'body-parser'
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

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/**ROTAS DO SISTEMA */
app.get('/', function(req, res){
    res.render('admin/index')
})

import produto from './routes/produto.js'
app.use('/produto', produto)

import pessoa from './routes/pessoa.js'
app.use('/pessoa', pessoa)

import usuario from './routes/usuario.js'
app.use('/usuario', usuario)

app.listen(3200, ()=> console.log('Servidor truando em http://localhost:3200'))