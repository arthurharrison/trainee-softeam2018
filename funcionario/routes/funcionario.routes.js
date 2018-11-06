const express = require('express');
const funcionarioController = require('../controllers/funcionario.controller');

module.exports = (funcionarioRouter) => {
    funcionarioRouter.route('/funcionario')
        //Rota para exibir todos os funcionarios
        .get(funcionarioController.getAll)

        //Rota para criar um novo funcionário
        .post(funcionarioController.create);
        
    funcionarioRouter.route('/funcionario/:nome')
        //Rota para exibir um unico funcionario
        .get(funcionarioController.getOne)

        //Rota para Atualizar funcionário
        .put(funcionarioController.update)

        //Rota para Deletar funcionário
        .delete(funcionarioController.remove);
    return funcionarioRouter;
};
