import request from 'supertest';
import app from '../src/app';

describe('Video API', () => {
  it('should create a new video', async () => {
    const res = await request(app)
      .post('/videos')
      .set('x-api-key', '123456')
      .send({
        title: 'Test Video',
        url: 'https://example.com/video.mp4',
        duration: 300
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test Video');
  });

  it('should get a list of videos', async () => {
    const res = await request(app).get('/videos').set('x-api-key', '123456');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get a video by ID', async () => {
    const res = await request(app).get('/videos/1').set('x-api-key', '123456');
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Test Video');
  });

  it('should delete a video by ID', async () => {
    const res = await request(app).delete('/videos/1').set('x-api-key', '123456');
    expect(res.status).toBe(204);
  });
});
