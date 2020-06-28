import express from "express";
import { RecipeModel } from "../models/recipe.js";
import * as mongo from "mongodb";

const { ObjectId } = mongo;
let router = express.Router();

router.get("/recipes", (req, res) => {
  RecipeModel.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "authorId",
        foreignField: "_id",
        as: "author",
      },
    },
    { $unwind: { path: "$author" } },
  ]).then((response) => {
    res.json(response);
  });
});

router.get("/recipes/:recipeId", (req, res) => {
  RecipeModel.findOne({
    _id: req.params.recipeId,
  }).then((response) => {
    res.json(response);
  });
});

router.post("/recipes", (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }

  let model = new RecipeModel(req.body);
  model
    .save()
    .then((doc) => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }
      res.status(201).send(doc);
    })

    .catch((err) => {
      res.status(500).json(err);
    });
});

export const recipesRouter = router;
