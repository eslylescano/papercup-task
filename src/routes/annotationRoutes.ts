import { Router, Request, Response } from "express";
import {
  createAnnotation,
  getAnnotationsByVideoId,
  getAnnotationById,
  updateAnnotation,
  deleteAnnotation,
} from "../models/annotationModel";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const annotation = await createAnnotation(req.body);
    res.status(201).json(annotation);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/video/:videoId", async (req: Request, res: Response) => {
  try {
    const annotations = await getAnnotationsByVideoId(
      parseInt(req.params.videoId, 10)
    );
    res.status(200).json(annotations);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const annotation = await getAnnotationById(parseInt(req.params.id, 10));
    res.status(200).json(annotation);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    await updateAnnotation(parseInt(req.params.id, 10), req.body);
    res.status(204).send();
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await deleteAnnotation(parseInt(req.params.id, 10));
    res.status(204).send();
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

export default router;
