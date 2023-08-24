import express from 'express';
import dotenv from 'dotenv/config';
import connectMongoose from './connectDB.js';
import router from './router/routerProfile.js';

const app = express();
const port = process.env.PORT


app.use(express.json());

app.use('/api', router);



connectMongoose();
app.listen(port);
console.log('listening on port:', port )