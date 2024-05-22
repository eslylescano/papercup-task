import sequelize from '../utils/database';

export interface Video {
  id?: number;
  title: string;
  url: string;
  duration: number;
}

export async function createVideo(video: Video): Promise<Video> {
  const db = await sequelize;
  const result = await db.run(
    'INSERT INTO videos (title, url, duration) VALUES (?, ?, ?)',
    [video.title, video.url, video.duration]
  );
  return { id: result.lastID, ...video };
}

export async function getVideos(): Promise<Video[]> {
  const db = await sequelize;
  return db.all('SELECT * FROM videos');
}

export async function getVideoById(id: number): Promise<Video> {
  const db = await sequelize;
  const video = await db.get('SELECT * FROM videos WHERE id = ?', [id]);
  if (!video) {
    throw new Error(`Video with id ${id} not found`);
  }
  return video;
}

export async function deleteVideo(id: number): Promise<void> {
  const db = await sequelize;
  const result = await db.run('DELETE FROM videos WHERE id = ?', [id]);
  if (result.changes === 0) {
    throw new Error(`Video with id ${id} not found`);
  }
}
