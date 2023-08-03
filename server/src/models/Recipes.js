import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    ingredients: [{ type: String, require: true}],
    instructions: { type: String, require: true},
    imageUrl: { type: String, require: true},
    cookingTime: { type: Number, require: true},
    userOwner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users", 
        require: true 
    },
});

export const RecipesModel = mongoose.model("Recipes", recipeSchema);