import { Router } from "express";
import { register } from "../controller/controllerRegister.js";

const router = Router();

router.post("/register", register);

export default router;