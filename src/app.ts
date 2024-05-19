import express from 'express';
import bodyParser from 'body-parser';
import videoRoutes from './routes/videoRoutes';
import annotationRoutes from './routes/annotationRoutes';
import { apiKeyMiddleware } from './middlewares/apiKeyMiddleware';
import sequelize from './utils/database';


const app = express();

app.use(bodyParser.json());

app.use(apiKeyMiddleware);

app.use('/videos', videoRoutes);
app.use('/annotations', annotationRoutes);

sequelize.sync().then(() => {
    console.log('Database synced');
  });

export default app;
