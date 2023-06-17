import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://appadmin:mernPassword123@recipe.s2rgwjc.mongodb.net/recipe?retryWrites=true&w=majority")

app.listen(3001, () => console.log('listening on port 3001 -> http://localhost:3001'));