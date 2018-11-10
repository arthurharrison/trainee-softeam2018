const router = require('express').Router();
const funcionarioController = require('../controllers/funcionario.controller');
const authController = require('../controllers/auth.controller');

funcionarioRouter= () => {
    //usar para proteger as rotas do funcionario com a autenticação
    //router.use(authController.isAuthenticated);
    router.route('/')
        //Rota para exibir todos os funcionarios
        .get(funcionarioController.getAll)

        //Rota para criar um novo funcionário
        .post(funcionarioController.create);
        
    router.route('/:nome')
        //Rota para exibir um unico funcionario
        .get(funcionarioController.getOne)

        //Rota para Atualizar funcionário
        .put(funcionarioController.update)

        //Rota para Deletar funcionário
        .delete(funcionarioController.remove);
    return router;
};

module.exports = funcionarioRouter;
