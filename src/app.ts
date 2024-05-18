import express from 'express';
import exampleRouter from './routes/example';

export const app = express();

app.use(express.json());
app.use('/example', exampleRouter);
