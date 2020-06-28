import { userRouter } from "./src/routes/user.js";
import { recipesRouter } from "./src/routes/recipes.js";

import express from "express";
import bodyParser from "body-parser";

import { default as mongodb } from "mongodb";
const app = express();

app.use((req, res, next) => {
  console.log(`Middleware has been sucessfully executed!`);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRouter);
app.use(recipesRouter);
app.use((req, res, next) => {
  res.status(404).send("404 error the page resource was not found!");
});

// app.get("/recipes", (req, res) => {
//   recipeCollection
//     .aggregate([
//       {
//         $lookup: {
//           from: "users",
//           localField: "authorId",
//           foreignField: "id",
//           as: "author",
//         },
//       },
//       { $unwind: { path: "$author" } },
//     ])
//     .toArray()
//     .then((results) => {
//       res.send(results);
//     })
//     .catch((error) => console.error(error));
// });

// app.post("/recipes", (req, res) => {
//   recipeCollection
//     .insertOne(req.body)
//     .then((result) => {
//       res.send(result.ops[0]);
//     })
//     .catch((error) => console.error(error));
// });

// app.get("/users", (req, res) => {
//   users(db)
//     .then((results) => {
//       res.send(results);
//     })
//     .catch((error) => console.error(error));
// });

// app.post("/users", (req, res) => {
//   userCollection
//     .insertOne(req.body)
//     .then((result) => {
//       res.send(result.ops[0]);
//     })
//     .catch((error) => console.error(error));
// });

app.listen(4000, function () {
  console.log("listening on 4000");
});
