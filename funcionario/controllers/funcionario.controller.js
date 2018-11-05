const Funcionario = require('../models/funcionario.model');
//CREATE Funcionario
const create = async(req, res) => {
    try{
        const newFuncionario = new Funcionario(req.body);
        //validando a requisição
        // if(!newFuncionario.nome || !newFuncionario.cpf || !newFuncionario.nivelPermissao)
        // { 
        //     return res.status(400).send({message: "Os campos Nome, CPF e Nível de permissão são requeridos"});
        // };
        if(!newFuncionario.nome) return res.status(400).send({message: 'Nome do Funcionário não enviado '});
        if(!newFuncionario.cpf) return res.status(400).send({message: 'CPF do Funcionário não enviado '});
        if(!newFuncionario.nivelPermissao) return res.status(400).send({message: 'Nível de Permissão do Funcionário não enviado '});

        await newFuncionario.save(function (err) {
            if(!err){
                return res.status(201).send({message: 'Funcionário cadastrado com sucesso'});
            }
            else if(err.code === 11000){
                console.log(err);
                return res.status(400).send({message: 'Funcionário já está cadastrado'});
            }
            else{
                return res.status(500).send({error: err, message: 'Erro interno do servidor'});
            }
        });

    }
    catch (err){
        return res.status(500).send({error: err, message: 'Erro interno do servidor'});
    }
};


module.exports = {
    create

};
