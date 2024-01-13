import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import connectDB from "./backend/config/db.js";
import authRoute from "./backend/routes/authRoute.js"
import categoryRoute from './backend/routes/categoryRoute.js'
import productRoute from './backend/routes/productRoute.js';
// import orderRoute from './routes/orderRoute.js';

import cors from 'cors'


//configure env
dotenv.config();

//database config
connectDB();

//rest object to call api
const app=express();


//middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/category', categoryRoute);
app.use("/api/v1/product",productRoute)
// app.use("/api/v1/order",orderRoute)


//rest api create
app.get("/",(req,res)=>{
    res.send('<h1>Welcome to EShop</h1>');
        // message:"Welcome to Eshop",
});

//port
const PORT= process.env.PORT || 8000;
//run listen

app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE}  mode on port  ${PORT}`.bgCyan.white);
});
