require('dotenv').config();
const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello World!');
})
app.get('/twitter',(req,res)=>{
    res.send("Ashutosh Rana");
})
app.get('/login',(req,res)=>{
    res.send(`<h1 style="color:red">Please Login!</h1>`)
})
app.get('/youtube',(req,res)=>{
    res.send(`<h2 style="color:green">Please Subscribe my Channel!</h1>`)
})
app.listen(process.env.PORT,()=>{
    console.log(`Express is listening on  Port ${port}`);
});