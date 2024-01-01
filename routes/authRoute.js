import express from "express";
import { registerController,loginController } from '../controllers/authController.js';
//router object
const router =express.Router()

//routing
//REGISTER method post so user can edit their data
router.post('/register',registerController);

//login
router.post('/login',loginController);


export default router;