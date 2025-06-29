import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.put('/update-profile', protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);
export default router;
//GDAK4XbgL3yqFCHN
//mongodb+srv://ramamoorthyv93:GDAK4XbgL3yqFCHN@cluster0.ei3bfq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0