const Sequelize = require('sequelize')
const connection = new Sequelize('infoCamioes', 'root', 'password',{
    host: 'localhost',
    dialect: "mysql"
})

module.exports = {Sequelize, connection}