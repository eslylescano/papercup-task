import request from 'supertest';
import app from '../src/app';


describe('API Key Middleware', () => {
  it('should return 401 if no API key is provided', async () => {
    const res = await request(app).get('/videos');
    expect(res.status).toBe(401);
    expect(res.body.message).toBe('Unauthorized');
  });

  it('should return 401 if an invalid API key is provided', async () => {
    const res = await request(app)
      .get('/videos')
      .set('x-api-key', 'invalid-key');
    expect(res.status).toBe(401);
    expect(res.body.message).toBe('Unauthorized');
  });

  it('should allow access if a valid API key is provided', async () => {
    const res = await request(app)
      .get('/videos')
      .set('x-api-key', '123456');
    expect(res.status).toBe(200);
  });
});
