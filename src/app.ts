import express from 'express';
import bodyParser from 'body-parser';
import videoRoutes from './routes/videoRoutes';
import annotationRoutes from './routes/annotationRoutes';
import { apiKeyMiddleware } from './middlewares/apiKeyMiddleware';
import initDb from './utils/initDb';


const app = express();

app.use(bodyParser.json());

app.use(apiKeyMiddleware);

app.use('/videos', videoRoutes);
app.use('/annotations', annotationRoutes);


initDb().then(() => {
  console.log('Database initialized');
}).catch(err => {
  console.error('Failed to initialize database:', err);
});

export default app;
