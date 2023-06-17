import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js';



const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect("mongodb+srv://appadmin:mernPassword123@recipe.s2rgwjc.mongodb.net/recipe?retryWrites=true&w=majority")

app.listen(3001, () => console.log('listening on port 3001 -> http://localhost:3001'));