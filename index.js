// Página principal, onde os dados serão requeridos da página html
const express = require('express')
const app = express()


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/sobre.html')
})

app.get('/sobre', (req, res) => {
    res.send('Minha página sobre')
})

app.get('/blog', (req, res) => {
    res.send('Meu blog!!')
})


app.get('/ola/:nome', (req, res) => {
    const { nome } = req.params
    res.send(`Ola, ${nome}`)
})









app.listen(3333, () => {
    console.log('Servidor rodando!')
})
