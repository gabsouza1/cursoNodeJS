//  Realizando a conexão com o bando de dados my sql
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'Gabriel@1995', {
    host: 'localhost',
    dialect: 'mysql'
})


// Criando modules

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.sync({force: true})

// Colocando dados dentro da tabela

// Postagem.create({
//     titulo: 'Aula de Node',
//     conteudo: 'Aula muito boa de nodeJS, estou aprendendo bem'
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true})
Usuario.create({
    nome: 'Gabriel',
    sobrenome: 'Souza',
    idade: 26,
    email: 'gabriel@gmail.com'
})



// Verificando se a conexão está acontecendo ou não
sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso!')
}).catch(function(erro){
    console.log('Falha ao se conectar: '+erro)
})


// yarn init
// yarn add express
// yarn add nodemon
// yarn add sequelize
// yarn add mysql2 