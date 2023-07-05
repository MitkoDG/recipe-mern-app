import express from "express";

import { RecipeModel } from "../models/Recipes";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const reponse = await RecipeModel.find({});
        res.json(reponse);
    } catch (err) {
        res.json(err);
    }
});



export { router as recipesRouter };