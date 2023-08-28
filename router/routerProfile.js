import { Router } from "express";
import { register } from "../controller/controllerRegister.js";
import { loginUser } from "../controller/controllerLogin.js";


const router = Router();

router.post("/register", register);
router.post("/login", loginUser);

export default router;