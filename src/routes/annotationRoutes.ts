import { Router } from 'express';
import { createAnnotation, getAnnotationsByVideoId, updateAnnotation, deleteAnnotation } from '../models/annotationModel';

const router = Router();

router.post('/', async (req, res) => {
  const annotation = await createAnnotation(req.body);
  res.status(201).json(annotation);
});

router.get('/video/:videoId', async (req, res) => {
  const annotations = await getAnnotationsByVideoId(parseInt(req.params.videoId, 10));
  res.status(200).json(annotations);
});

router.put('/:id', async (req, res) => {
  await updateAnnotation(parseInt(req.params.id, 10), req.body);
  res.status(200).json(req.body);
});

router.delete('/:id', async (req, res) => {
  await deleteAnnotation(parseInt(req.params.id, 10));
  res.status(204).send();
});

export default router;
