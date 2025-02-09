import banco from '../config/banco.js'

const Pessoa = banco.sequelize.define('pessoas', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: banco.Sequelize.STRING(150),
    },
    telefone:{
        type: banco.Sequelize.STRING(20),
    },
    email:{
        type: banco.Sequelize.STRING(150),
        unique: true,
        allowNull: false,
    },
    cpf:{
        type: banco.Sequelize.STRING(20),
        unique: true,
        allowNull: false,
    },
    status:{
        type: banco.Sequelize.INTEGER,
    }
})

export default Pessoa