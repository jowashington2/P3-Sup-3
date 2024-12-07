const request = require('supertest');
const app = require('../src/app');

/**
 * Test suite for the Express application.
 * Verifies functionality of the root GET endpoint.
 */
describe('GET /', () => {
    /**
     * Test for the root GET endpoint.
     * Ensures it responds with "hello world".
     */
    it('should respond with "hello world"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);          // Check status code
        expect(response.text).toBe('hello world'); // Check response message
    });
});
