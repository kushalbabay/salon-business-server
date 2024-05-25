import express from "express";
import mongoose, { Schema } from "mongoose";
import userRouter from "./routes/users";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => console.log("Mongo Connected"))
  .catch((err) => console.log(err));

app.use("/api/users", userRouter);

app.listen(8080, () => {
  console.log("App running on 8080");
});
