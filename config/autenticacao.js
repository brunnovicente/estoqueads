import passportLocal from 'passport-local'
const localEstrategy = passportLocal.Strategy
import Usuario from '../models/Usuario.js'
import bcrypt from 'bcryptjs'

export default function(passport){
    passport.use(new localEstrategy(
        {usernameField: 'username', passwordField: 'password'},
        function(username, password, done){
            Usuario.findOne({
                where:{
                    login: username
                }
            }).then(function(usuario){
                if(!usuario){
                    return done(null, false, {message: 'Usuário não encontrado'})
                }
                bcrypt.compare(password, usuario.senha, function(erro, iguais){
                    if(iguais){
                        return done(null, usuario)
                    }else{
                        return done(null, false, {message: 'Senha incorreta!'})
                    }
                })
            })
        }
    ))

    passport.serializeUser(function(usuario, done){
        done(null, usuario.id)
    })

    passport.deserializeUser(function(id, done){
        Usuario.findByPk(id).then(function(usuario){
            done(null, usuario)
        })
    })

}//Fim do Módulo