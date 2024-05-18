import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const newAnnotation = { id: 1, ...req.body };
  res.status(201).json(newAnnotation);
});

router.get('/video/:videoId', (req, res) => {
  res.status(200).json([{ id: 1, videoId: 1, startTime: 60, endTime: 120, type: 'Advertisement', notes: 'Test annotation notes' }]);
});

router.put('/:id', (req, res) => {
  const updatedAnnotation = { id: 1, ...req.body };
  res.status(200).json(updatedAnnotation);
});

router.delete('/:id', (req, res) => {
  res.status(204).send();
});

export default router;
