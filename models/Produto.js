import banco from "../config/banco.js"

const Produto = banco.sequelize.define('produtos',{
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao:{
        type: banco.Sequelize.STRING(150)
    },
    preco:{
        type: banco.Sequelize.FLOAT
    },
    estoque:{
        type: banco.Sequelize.INTEGER
    },
    status:{
        type: banco.Sequelize.INTEGER
    },
    foto:{
        type: banco.Sequelize.STRING(250)
    }
})

//Produto.sync()
export default Produto