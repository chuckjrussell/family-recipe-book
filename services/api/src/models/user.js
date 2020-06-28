import { database } from "./mongoose.js";
import mongoose from "mongoose";

export const schema = new mongoose.Schema({
  imageUrl: String,
  firstName: String,
  lastName: String,
});

export const UserModel = database.model("User", schema);
