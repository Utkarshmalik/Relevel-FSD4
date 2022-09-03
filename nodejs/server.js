const express=require("express");
var morgan = require('morgan')

const app=express();

const db={
    123:"Utkarsh",
    567:"Rahul",
    873:"Shrey"
}

app.use(morgan('combined'));


app.use(function(req,res,next){
    console.log(`New request receieved now : ${Date.now()}`);
    next();
})

app.use(function(req,res,next){
    const isAuthenticated=true;

    if(!isAuthenticated){
        res.status(403).send("Invalid request");
    }else{
        next();
    }
})


app.get("/",function(req,res){
    res.send("Express js backend http endpoint is ready !!!");
});

app.get("/name",function(req,res){
    res.send("Express js backend http endpoint is ready! Name: Utkarsh Malik")
});


app.get(/^\/users\/(\d+)$/,function (req,res){

    const userId=req.params[0];
   const UserDetails=db[userId];
   res.send(`Hello from ${UserDetails}`);
})

app.listen(8000,()=>{
    console.log("Application is listening on port 8000");
})

