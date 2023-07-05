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

router.post("/", async (req, res) => {
    const recipe = new RecipeModel(...req.body);
    try {
        const reponse = await recipe.save();
        res.json(recipe);
    } catch (err) {
        res.json(err);
    }
});

export { router as recipesRouter };