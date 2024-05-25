import { Request, Response, NextFunction } from "express-serve-static-core";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", userSchema);

export function getAllUsers(req: Request, res: Response, next: NextFunction) {
  let dbRes = userModel.find({});
  console.log(dbRes);
  return res.send([{ userName: "Kushal" }, { userName: "Babay" }]);
}
