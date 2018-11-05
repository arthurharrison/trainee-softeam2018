const express = require('express');
const funcionarioController = require('../controllers/funcionario.controller');

module.exports = (funcionarioRouter) => {
    funcionarioRouter.route('/funcionario')
        //Rota para criar um novo funcionário
        .post(funcionarioController.create);
        
    return funcionarioRouter;
};
