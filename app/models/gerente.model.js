const mongoose = require('mongoose');

const GerenteSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    cpf: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    permissao: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Gerente', GerenteSchema);