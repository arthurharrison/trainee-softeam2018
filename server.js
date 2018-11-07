/**
 * Configuração do Setup
 * Arquivo: server.js
 * Author: Danielle Farias
 */

 //chamadas dos pacotes:
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var gerente = require('./app/modules/gerente');

mongoose.connect('mongodb://localhost/node-crud-api');

//configuração da variável app para usar o bodyParser():
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//porta onde será executada a API:
var port = process.env.port || 8000;

//criando instância das rotas via Express:
var router = express.Router();

//rota de exemplo:
router.get('/', function(req, res){
    res.json({ message: 'Seja bem-vindo!'})
});

//definindo padrão das rotas prefixadas:
app.use('/api', router);

//iniciando aplicação(servidor):
app.listen(port);
console.log("Iniciando a app na porta "+ port);