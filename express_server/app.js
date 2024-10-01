import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.send("<H1>Hello, World!</H1>");
});

app.get("/contact",(req,res)=>{
    res.send("<H2>My name is oak");
});

app.listen(3000,()=>{
    console.log("Server listen at port 3000");
});