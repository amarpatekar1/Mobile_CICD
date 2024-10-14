const request = require('supertest');
const app = require('./app');

test('GET /api/message', async () => {
  const res = await request(app).get('/api/message');
  expect(res.statusCode).toEqual(200);
  expect(res.body.message).toBe('Hello, API!');
});

