import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const newVideo = { id: 1, ...req.body };
  res.status(201).json(newVideo);
});

router.get('/', (req, res) => {
  res.status(200).json([{ id: 1, title: 'Test Video', url: 'https://example.com/video.mp4', duration: 300 }]);
});

router.get('/:id', (req, res) => {
  res.status(200).json({ id: 1, title: 'Test Video', url: 'https://example.com/video.mp4', duration: 300 });
});

router.delete('/:id', (req, res) => {
  res.status(204).send();
});

export default router;
