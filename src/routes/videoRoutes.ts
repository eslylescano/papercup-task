import { Router, Request, Response } from "express";
import {
  createVideo,
  getVideos,
  getVideoById,
  deleteVideo,
} from "../models/videoModel";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const video = await createVideo(req.body);
    res.status(201).json(video);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const videos = await getVideos();
    res.status(200).json(videos);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const video = await getVideoById(parseInt(req.params.id, 10));
    res.status(200).json(video);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await deleteVideo(parseInt(req.params.id, 10));
    res.status(204).send();
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

export default router;
