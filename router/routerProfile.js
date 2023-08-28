import { Router } from "express";
import { register } from "../controller/controllerRegister.js";
import { loginUser } from "../controller/controllerLogin.js";
import isAuth from "../middleware/isAuth.js";
import { getListe } from "../controller/controllerUsersListe.js";

const router = Router();

router.post("/register", register);
router.post("/login", loginUser);
router.get("/usersList", isAuth, getListe);

export default router;
