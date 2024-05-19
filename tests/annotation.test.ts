import request from 'supertest';
import app from '../src/app';

describe('Annotation API', () => {
  it('should create a new annotation', async () => {
    const res = await request(app)
      .post('/annotations')
      .set('x-api-key', '123456')
      .send({
        videoId: 1,
        startTime: 60,
        endTime: 120,
        type: 'Advertisement',
        notes: 'Test annotation notes'
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.type).toBe('Advertisement');
  });

  it('should get annotations for a video', async () => {
    const res = await request(app).get('/annotations/video/1').set('x-api-key', '123456');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should update an annotation', async () => {
    const res = await request(app)
      .put('/annotations/1')
      .set('x-api-key', '123456')
      .send({
        startTime: 160,
        endTime: 210,
        type: 'Updated Scene',
        notes: 'Updated notes'
      });

    expect(res.status).toBe(200);
    expect(res.body.type).toBe('Updated Scene');
  });

  it('should delete an annotation by ID', async () => {
    const res = await request(app).delete('/annotations/1').set('x-api-key', '123456');
    expect(res.status).toBe(204);
  });
});
