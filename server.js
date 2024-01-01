const express= require('express');
const colors= require('colors');
//rest object to call api
const app=express();

//rest api create
app.get('/',(req,res)=>{
    res.send({
        message:"Welcome to Eshop",
    });
});

//port
const PORT= 8080;

//run listen

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white);
});
