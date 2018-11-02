'use strict'

const repository = require('../repositories/order-repository');

exports.getOne = async(req, res, next) => {
    try{
        var data = await repository.getOne(req.params.id);
        if(!data) return res.status(404).send({
            message: 'Pedido não encontrado'
        });
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'Erro interno no servidor'
        });
    }
}

exports.getAll = async(req, res, next) => {
    try{
        var data = await repository.getAll();
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'Erro interno no servidor'
        });
    }
}

exports.create = async(req, res, next) => {
    try{
        await repository.create(req.body);
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch(e){
        res.status(500).send({
            message: 'Erro interno no servidor'
        });
    }
}

exports.update = async(req, res, next) => {
    try{
        const data = await repository.update(req.params.id, req.body);
        if(!data) return res.status(404).send({
            message: 'Pedido não encontrado'
        });
        return res.status(200).send({
            message: 'Pedido atualizado com sucesso!'
        });
    } catch(e){
        res.status(500).send({
            message: 'Erro interno no servidor'
        });
    }
}

exports.remove = async(req, res, next) => {
    try{
        const data = await repository.remove(req.params.id);
        if(!data) return res.status(404).send({
            message: 'Pedido não encontrado'
        });
        return res.status(200).send({
            message: 'Pedido removido com sucesso!'
        });
    } catch(e){
        res.status(500).send({
            message: 'Erro interno no servidor'
        });
    }
}