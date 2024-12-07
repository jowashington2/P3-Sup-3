const express = require('express');
const app = express();

/**
 * Express application instance.
 * Handles incoming HTTP requests.
 */
 
/**
 * Root GET endpoint.
 * Responds with "hello world".
 * @route GET /
 * @returns {string} 200 - "hello world"
 */
app.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = app;
