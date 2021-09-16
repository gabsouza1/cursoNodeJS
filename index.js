// Página principal, onde os dados serão requeridos da página html
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

// Instalando o handlebars
// npm install --save express-handlebars

//Configurando o handlebars para template engine
    // COnfig
        // Template Engine handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')


app.listen(3333, () => {
    console.log('Servidor rodando!')
})
