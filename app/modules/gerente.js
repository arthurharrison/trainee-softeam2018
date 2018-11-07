/**
 * Arquivo: gerente.js
 * author: Danielle Farias
 * 
 * Gerente
 * nome: String
 * cpf: Number
 * email: String
 * nivel de permissão:
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GerenteSchema = new Schema({
    nome: String,
    cpf: Number,    
    email: String,
    permissao: Boolean
});

module.exports = mongoose.model('gerente', GerenteSchema);