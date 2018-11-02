'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    kindFood:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    extra: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Order', schema);