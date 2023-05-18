const express = require('express')
const app = express()
const conn = require('./db/conn')
const User = require('./models/User')
const Socio = require('./models/Socio')


const PORT = 3000
const hostname = 'localhost'

// --------------------------------
app.get('/',(req,res)=>{
    res.end('retornando mensagem front end')
})


// --------------------------------
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((error)=>{
    console.error('Erro de conexão'+error)
})


