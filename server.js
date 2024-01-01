import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"


//configure env
dotenv.config();

//database config
connectDB();

//rest object to call api
const app=express();


//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);

//rest api create
app.get("/",(req,res)=>{
    res.send('<h1>Welcome to EShop</h1>');
        // message:"Welcome to Eshop",
});

//port
const PORT= process.env.PORT || 8080;
//run listen

app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE}  mode on port  ${PORT}`.bgCyan.white);
});
