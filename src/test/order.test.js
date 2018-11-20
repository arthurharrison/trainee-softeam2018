'use strict'

const request = require('supertest');
const app = require('../app');

beforeEach(async () => {
    await request(app)
        .post('/orders')
        .send({
            kindFood: 'Lasanha',
            amount: 4,
            price: 10.0,
            extra: 'com molho'
        });
});

describe('Test do getAll /orders', () => {
    it('Esperado um array de volta', (done) => {
        request(app)
            .get('/orders')
            .send()
            .expect(200)
            .then((res) => {
                expect(Array.isArray(res.body)).toBeTruthy();
                done();
            });
    });    
});

describe('Testando a inserção create /orders', () =>{
    it('Deve responder com um pedido aceito', (done) =>{
        request(app)
            .post('/orders')
            .send({
                kindFood: 'feijoada',
                amount: 5,
                price: 6.0,
                extra: 'recheado de calabresa'
            }).expect(201, done);
    });

    it('Deve responder com um pedido não completo', (done) => {
        request(app)
            .post('/orders')
            .send({
                kindFood: 'Arroz',
                amount: 3,
                extra: 'com molho'
            }).expect(400, done);
    });
});