const Gerente = require('../models/gerente.model.js');

// Create and Save a new Gerente
exports.create = (req, res) => {
    // Validate request
    if(!req.body.cpf) {
        return res.status(400).send({
            message: "Gerente cpf can not be empty"
        });
    }

    // Create a Gerente
    const gerente = new Gerente({
        nome: req.body.nome, 
        cpf: req.body.cpf,
        email: req.body.email,
        permissao: req.body.permissao
    });

    // Save Gerente in the database
    gerente.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Gerente."
        });
    });

};

// Retrieve and return all gerentes from the database.
exports.findAll = (req, res) => {
    Gerente.find()
    .then(gerentes => {
        res.send(gerentes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Gerentes."
        });
    });
};

// Find a single gerente with a gerenteId
exports.findOne = (req, res) => {
    exports.findOne = (req, res) => {
        Gerente.findById(req.params.gerenteId)
        .then(gerente => {
            if(!gerente) {
                return res.status(404).send({
                    message: "Gerente not found with id " + req.params.gerenteId
                });            
            }
            res.send(gerente);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Gerente not found with id " + req.params.gerenteId
                });                
            }
            return res.status(500).send({
                message: "Error retrieving gerente with id " + req.params.gerenteId
            });
        });
    };

};

// Update a gerente identified by the gerenteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.cpf) {
        return res.status(400).send({
            message: "Gerente cpf can not be empty"
        });
    }

    // Find note and update it with the request body
    Gerente.findByIdAndUpdate(req.params.gerenteId, {
        nome: req.body.nome, 
        cpf: req.body.cpf,
        email: req.body.email,
        permissao: req.body.permissao
    }, {new: true})
    .then(gerente => {
        if(!gerente) {
            return res.status(404).send({
                message: "Gerente not found with id " + req.params.gerenteId
            });
        }
        res.send(gerente);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Gerente not found with id " + req.params.gerenteId
            });                
        }
        return res.status(500).send({
            message: "Error updating Gerente with id " + req.params.gerenteId
        });
    });
};

// Delete a gerente with the specified gerenteId in the request
exports.delete = (req, res) => {
    Gerente.findByIdAndRemove(req.params.gerenteId)
    .then(gerente => {
        if(!gerente) {
            return res.status(404).send({
                message: "Gerente not found with id " + req.params.gerenteId
            });
        }
        res.send({message: "Gerente deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Gerente not found with id " + req.params.gerenteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete gerente with id " + req.params.gerenteId
        });
    });
};