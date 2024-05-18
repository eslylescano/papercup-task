import request from 'supertest';
import { app } from '../src/app';

describe('GET /example', () => {
  it('should return a welcome message', async () => {
    const response = await request(app).get('/example');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to the example endpoint!');
  });
});
