import Router from "express";
import * as authController from '../controllers/auth.js';
import { validateLogin } from "../middleware/validationRequest.js"
const router = Router();

//Login path with Middleware to validate request body
router.post("/login",validateLogin, authController.login);

export default router;