import mongoose from "mongoose";

const server = "cluster0-bvsu2.mongodb.net";
const dbName = "family-recipe-book";
const userName = "chuckjrussell";
const password = "md_sush1h@1g";

export const connectionString = `mongodb+srv://${userName}:${password}@${server}/${dbName}?retryWrites=true&w=majority`;

mongoose.set("useCreateIndex", true);
mongoose.connect(connectionString, {
  useNewUrlParser: true,
});

export const database = mongoose;
