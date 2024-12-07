const express = require('express');
const app = express();

/**
 * Root GET endpoint that responds with "hello world".
 */
app.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = app;
