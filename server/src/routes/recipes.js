import express from "express";

import { RecipeModel } from "../models/Recipes";
import { UserModel } from "../models/Users";

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

router.put("/", async (req, res) => {



    try {
        const recipe = await RecipeModel.findById(req.body.recipeID);
        const user = await UserModel.findById(req.body.userID);
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({ savedRecipes: user.savedRecipes });
    } catch (err) {
        res.json(err);
    }
});


export { router as recipesRouter };