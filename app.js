import express, {json} from 'express';
import routes from './routes/index.js';
import {config} from './config/config.js';
import errorHandler from './middleware/error.middleware.js';

const app=express();

app.use(json());


app.use('/api', routes); // All routes mounted under /api

app.use(errorHandler);

const PORT = config.port || 8080;

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
});
