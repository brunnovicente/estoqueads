import banco from '../config/banco.js'
import Pessoa from './Pessoa.js'

const Usuario = banco.sequelize.define('usuarios', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: banco.Sequelize.STRING(100),
    },
    senha:{
        type: banco.Sequelize.STRING(250),
    },
    categoria:{
        type: banco.Sequelize.INTEGER,
    },
    status:{
        type: banco.Sequelize.INTEGER,
    }
})

Usuario.belongsTo(Pessoa, {
    foreignKey: 'pessoa_id',
    constraint: true,
    as: 'pessoa'
})

export default Usuario