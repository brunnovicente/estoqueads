import express from 'express';
const app = express();

import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { allowInsecurePrototypeAccess} from "@handlebars/allow-prototype-access";
import session from 'express-session'
import flash from 'connect-flash'

////////////////////////
//CONFIGURAÇÕES
////////////////////////
app.use(session({
     secret: 'analiseedesenvolvimentodesistemas',
     resave: true,
     saveUninitialized: false,
}))
app.use(flash())

app.use(function (req, res, next){
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg")
    next()
})

//CONFIGURAR O TEMPLATE PADRÃO
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

//CONFIGURAR O BODY PARSER PARA ENVIAR DADOS
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Pasta de Arquivos Estásticos
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

////////////////////
//ROTAS DO SISTEMA
////////////////////
app.get('/', (req, res) => {
    res.redirect('/admin');
})

import admin from './routes/admin.js';
app.use('/admin', admin)

import produto from './routes/produto.js';
app.use('/produto', produto)

import pessoa from './routes/pessoa.js';
app.use('/pessoa', pessoa)

import usuario from './routes/usuario.js';
app.use('/usuario', usuario)

app.listen(3200, ()=> console.log('Servidor Rodando em http://localhost:3200'))