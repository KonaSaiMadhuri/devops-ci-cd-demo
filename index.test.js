const request = require('supertest');
const express = require('express');

// Import your app (or recreate a minimal app for testing)
const app = express();

// Setup a simple route (for testing)
app.get('/', (req, res) => {
  res.send('Hello World from DevOps project!');
});

// Write your first test
describe('GET /', () => {
  it('should respond with Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World from DevOps project!');
  });
});







