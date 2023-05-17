const express = require('express')
const app = express()
const conn = require('./db/conn')

const PORT = 3000
const hostname = 'localhost'

// --------------------------------



// --------------------------------
app.listen(PORT, hostname, ()=>{
    console.log(`servidor rodando em ${hostname}:${PORT}`)
})
