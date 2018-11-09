const request = require('supertest');
const app = require('../../server');

beforeEach(async () => {
    await request(app)
        .post('/app')
        .send({
            nome : 'Fulano',
            cpf : '12345',
            email : 'fulano@mail.com',
            permissao : true
        });
});

    // authController test
describe('Test GET /app', () => {
    it('It should respond the GET method sending back an array', (done) =>{
        request(app)
            .get('/app')
            .send()
            .expect(200)
            .then((res) => {
                expect(Array.isArray(res.body)).toBeTruthy();
                done();
            });
    });
});

describe('Test GET /app/:cpf', () => {
    it('It should respond the GET method sending back an object', (done) =>{
        request(app)
            .get('/app/12345')
            .send()
            .expect(200)
            .then((res) => {
                expect(res.body).toBeTruthy();
                done();
            });
    });

    it('It should not respond the GET method with a nonexistent cpf', (done) =>{
        request(app)
            .get('/app/999999')
            .send()
            .expect(404, done);
    });
});

describe('Test POST /app', () => {
    it('It should respond the POST method with a nonexistent gerente', (done) =>{
        request(app)
            .post('/app')
            .send({
                nome : 'Beltrano',
                cpf : '67890',
                email : 'beltrano@mail.com',
                permissao : true
            }).expect(201, done);
    });

    it('It should not respond the POST method with a empty cpf', (done) =>{
        request(app)
            .post('/app')
            .send({
                nome : 'Beltrano',
                email : 'beltrano@mail.com',
                permissao : true
            }).expect(400, done);
    });

    it('It not should respond the POST method with an existent gerente', (done) =>{
        request(app)
            .post('/app')
            .send({
                nome : 'Fulano',
                cpf : '12345',
                email : 'fulano@mail.com',
                permissao : true
            }).expect(400, done);
    });

    afterAll(async () => {
       await request(app)
           .delete('/app/67890');
    });
});

describe('Test PUT /app/:cpf', () => {
    it('It should respond the PUT method with a cpf', (done) =>{
        request(app)
            .put('/app/12345')
            .send({
                read: true
            }).expect(200, done);
    });

    it('It should not respond the PUT method with a nonexistent cpf', (done) =>{
        request(app)
            .put('/app/77777')
            .send()
            .expect(404, done);
    });
});

describe('Test DELETE /app/:cpf', () => {
    it('It should respond the DELETE method with a existent cpf', (done) =>{
        request(app)
            .delete('/app/12345')
            .send()
            .expect(200, done);
    });

    it('It should not respond the DELETE method with a nonexistent cpf', (done) =>{
        request(app)
            .delete('/app/88888')
            .send()
            .expect(404, done);
    });
});

afterEach(async () => {
    await request(app)
        .delete('/app/12345');
});
