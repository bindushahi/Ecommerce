import express from "express";
import { registerController } from '../controllers/authController.js';
//router object
const router =express.Router()

//routing
//REGISTER method post so user can edit their data
router.post('/register',registerController);



export default router;