import { Router } from "express";
import { getAllUsers } from "../handlers/users";

const router = Router();

router.get("/", getAllUsers);

export default router;
