import { Router } from "express";
import loginController from "../controllers/loginController.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get('/', asyncHandler(loginController));

export default router;