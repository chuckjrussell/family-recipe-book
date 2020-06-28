import { database } from "./mongoose.js";
import mongoose from "mongoose";

export const IngredientSchema = new mongoose.Schema({
  amount: String,
  unit: String,
  name: String,
  preparation: String,
});

export const RecipeSchema = new mongoose.Schema({
  title: String,
  authorId: { type: mongoose.Schema.ObjectId, ref: "Users" },
  sourceName: String,
  sourceUrl: String,
  servings: Number,
  tags: { type: [String] },
  imageUrl: String,
  steps: { type: [String] },
  ingredients: [IngredientSchema],
});

export const RecipeModel = database.model("Recipe", RecipeSchema);
