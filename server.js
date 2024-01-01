import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';


//configure env
dotenv.config();

//rest object to call api
const app=express();

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
