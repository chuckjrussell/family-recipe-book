import express from "express";
import { UserModel } from "../models/user.js";
import * as mongo from "mongodb";

const { ObjectId } = mongo;
let router = express.Router();

router.get("/users", (req, res) => {
  UserModel.find().then((response) => {
    res.json(response);
  });
});

router.get("/users/:userId", (req, res) => {
  UserModel.findOne({
    _id: req.params.userId,
  }).then((response) => {
    res.json(response);
  });
});

router.post("/users", (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }

  if (!req.body.firstName) {
    return res.status(500).send("First name is required");
  }

  if (!req.body.lastName) {
    return res.status(500).send("First name is required");
  }

  let model = new UserModel(req.body);
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

export const userRouter = router;
