import express from "express";
import { registerController,loginController,testController, forgotPasswordController } from '../controllers/authController.js';
//router object
const router =express.Router()
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//routing
//REGISTER method post so user can edit their data
router.post('/register',registerController);

//login
router.post('/login',loginController);

//test route
router.get('/test',requireSignIn,isAdmin,testController);

//private route protected route authentication user route
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
//private route protected route for admin authentication
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

//forgot password
router.post('/forgot-password',forgotPasswordController)

export default router;