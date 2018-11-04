'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
/*
//Connecta ao banco remoto - mlab
mongoose.connect('mongodb://rivanildojr:rivanildo07@ds235807.mlab.com:35807/softeam-trainee', {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
*/
//Connecta ao banco local
mongoose.connect('mongodb://localhost:27017/softeamTrainee', {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

//Carrega os Models
const Order = require('./models/order');

//Carrega as Rotas
const orderRoute = require('./routes/order-route');

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rotas dos pedidos
app.use('/orders', orderRoute);

module.exports = app;