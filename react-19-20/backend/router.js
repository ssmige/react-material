import expess from "express";
import { getUsers, login, register } from "./controllers.js";
import { valideteJwt } from "./middleware.js";

const router = expess.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/users", valideteJwt, getUsers);

export default router;
