module.exports = (app) => {
    const gerentes = require('../controllers/gerente.controller.js');

    // Create a new Gerente
    app.post('/gerentes', gerentes.create);

    // Retrieve all Gerentes
    app.get('/gerentes', gerentes.findAll);

    // Retrieve a single Gerente with gerenteId
    app.get('/gerentes/:gerenteId', gerentes.findOne);

    // Update a Gerente with gerenteId
    app.put('/gerentes/:gerenteId', gerentes.update);

    // Delete a Gerente with gerenteId
    app.delete('/gerentes/:gerenteId', gerentes.delete);
}