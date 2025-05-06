import express, {json} from 'express';
import routes from './routes/index.js';
import {config} from './config/config.js';
import errorHandler from './middleware/error.middleware.js';
import morgan from 'morgan';

const app=express();

app.use(json());

app.use(morgan('dev'));

app.use('/api', routes); // All routes mounted under /api

app.use(errorHandler);

const PORT = config.port;

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
});
