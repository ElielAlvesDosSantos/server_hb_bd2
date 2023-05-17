const { Sequelize } = require('sequelize')
const sequelize = new Sequelize ('banco_dad','root','senai',{
    host: 'localhost',
    dialect: 'mysql'
},{
    createdAt: false,
    updatedAt: false
})

sequelize.authenticate().then(()=>{
    console.log('conexão realizada com sucesso!')
}).catch((error)=>{
    console.error('não foi possivel conectar com o banco'+error)
})

module.exports = sequelize