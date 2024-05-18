import express from 'express';
import bodyParser from 'body-parser';
import videoRoutes from './routes/videoRoutes';
import annotationRoutes from './routes/annotationRoutes';


const app = express();

app.use(bodyParser.json());

app.use('/videos', videoRoutes);
app.use('/annotations', annotationRoutes);


export default app;
