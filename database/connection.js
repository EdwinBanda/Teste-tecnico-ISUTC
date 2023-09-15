const Sequelize = require('sequelize')
const connection = new Sequelize('infoCamioes', 'root', 'Edwin@19',{
    host: 'localhost',
    dialect: "mysql"
})

module.exports = {Sequelize, connection}