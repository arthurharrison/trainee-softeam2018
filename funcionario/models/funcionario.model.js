const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Criar esquema para o funcionario: nome, cpf, email e permissao
const funcionarioModel = new Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String
    },
    nivelPermissao: {
        type: String,
        required: true
    }
});

module.exports= mongoose.model('Funcionario', funcionarioModel);