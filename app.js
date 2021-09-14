// Criando um servidor na porta (8081)

var http = require('http')

http.createServer(function(req, res){
    res.end('Bem vindo ao curso de Nodejs')
}).listen(8081)



console.log('Servidor rodando!')