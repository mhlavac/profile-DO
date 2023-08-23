import express from 'express';
import dotenv from 'dotenv/config';
import connectMongoose from './connectDB.js';

const app = express();
const port = process.env.PORT

connectMongoose();
app.listen(port);
console.log('listening on port:', port )