import Usuario from '../models/Usuario.js';
import passport from 'passport';

class UsuarioController{

    login = function(req, res, next){
        passport.authenticate('local', {
            successRedirect: '/admin',
            failureRedirect: '/usuario/login',
            failureFlash: true
        })(req, res, next)
    }

    logout = function(req, res, next){
        req.logout(function(erro){
            res.redirect('/usuario/login')
        })
    }

}

export default new UsuarioController()
