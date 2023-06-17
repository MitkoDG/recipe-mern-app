import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3001, () => console.log('listening on port 3001 -> http://localhost:3001'));