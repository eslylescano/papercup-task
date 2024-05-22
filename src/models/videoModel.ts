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

export async function getVideoById(id: number): Promise<Video | undefined> {
  const db = await sequelize;
  return db.get('SELECT * FROM videos WHERE id = ?', [id]);
}

export async function deleteVideo(id: number): Promise<void> {
  const db = await sequelize;
  await db.run('DELETE FROM videos WHERE id = ?', [id]);
}
