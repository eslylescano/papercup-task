import dbPromise from './database';

async function initDb() {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      url TEXT NOT NULL,
      duration INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS annotations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      videoId INTEGER NOT NULL,
      startTime INTEGER NOT NULL,
      endTime INTEGER NOT NULL,
      type TEXT NOT NULL,
      notes TEXT,
      FOREIGN KEY (videoId) REFERENCES videos (id)
    );
  `);
  console.log('Database initialized');
}

export default initDb;
