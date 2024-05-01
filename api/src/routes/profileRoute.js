import express from "express";
import { getProfile, updateProfile } from "../controllers/profilController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);

export default router;
