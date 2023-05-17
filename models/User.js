const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const User = db.define('user', {
    nome: {
        type: DataTypes.STRING(30),
    },
    idade: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING(30)
    },
},{
    createdAt: false,
    updatedAt: false
})

User.sync({force:true})