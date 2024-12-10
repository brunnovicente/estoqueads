import express from 'express'
const app = express()
import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

/*CONFIGURAÇÃO DA PASTA ESTATICA*/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**CONFIGURAÇÃO DA VISÃO */
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.send('Bem Vindo ao Estoque')
})

app.listen(3000, ()=>'Servidor truando em http://localhost:3000')