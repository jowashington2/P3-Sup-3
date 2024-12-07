const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
    it('should respond with "hello world"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);          // Check status code
        expect(response.text).toBe('hello world'); // Check response message
    });
});
