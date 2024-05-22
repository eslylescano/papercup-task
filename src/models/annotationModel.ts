import dbPromise from '../utils/database';

export interface Annotation {
  id?: number;
  videoId: number;
  startTime: number;
  endTime: number;
  type: string;
  notes: string;
}

export async function createAnnotation(annotation: Annotation): Promise<Annotation> {
  const db = await dbPromise;
  const result = await db.run(
    'INSERT INTO annotations (videoId, startTime, endTime, type, notes) VALUES (?, ?, ?, ?, ?)',
    [annotation.videoId, annotation.startTime, annotation.endTime, annotation.type, annotation.notes]
  );
  return { id: result.lastID, ...annotation };
}

export async function getAnnotationsByVideoId(videoId: number): Promise<Annotation[]> {
  const db = await dbPromise;
  return db.all('SELECT * FROM annotations WHERE videoId = ?', [videoId]);
}

export async function updateAnnotation(id: number, annotation: Annotation): Promise<void> {
  const db = await dbPromise;
  await db.run(
    'UPDATE annotations SET startTime = ?, endTime = ?, type = ?, notes = ? WHERE id = ?',
    [annotation.startTime, annotation.endTime, annotation.type, annotation.notes, id]
  );
}

export async function deleteAnnotation(id: number): Promise<void> {
  const db = await dbPromise;
  await db.run('DELETE FROM annotations WHERE id = ?', [id]);
}
