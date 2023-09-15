const db = require("./connection")

const info = db.connection.define('info',{
    quilometragem : {
        type: db.Sequelize.INTEGER
    },
    litros:{
        type: db.Sequelize.INTEGER
    },
    matricula:{
        type: db.Sequelize.STRING
    },
    dataViagem:{
        type: db.Sequelize.DATE
    },
    consumoKM:{
        type: db.Sequelize.FLOAT
    }
})

// info.sync({force: true})

module.exports = info