import { Router } from 'express';
import { createVideo, getVideos, getVideoById, deleteVideo } from '../models/videoModel';

const router = Router();

router.post('/', async (req, res) => {
  const video = await createVideo(req.body);
  res.status(201).json(video);
});

router.get('/', async (req, res) => {
  const videos = await getVideos();
  res.status(200).json(videos);
});

router.get('/:id', async (req, res) => {
  const video = await getVideoById(parseInt(req.params.id, 10));
  if (video) {
    res.status(200).json(video);
  } else {
    res.status(404).send('Video not found');
  }
});

router.delete('/:id', async (req, res) => {
  await deleteVideo(parseInt(req.params.id, 10));
  res.status(204).send();
});

export default router;
