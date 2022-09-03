const express=require("express");
const uuid = require("uuid");
var morgan = require('morgan');
var bodyParser = require('body-parser');


const app=express();

app.use(bodyParser.json())


let usersDB=[{
    id:1,
    name:"Utkarsh",
    email:"utmalik@amazon.com"
}]


app.get("/users",function(req,res){
    res.json(usersDB);
})

app.post("/users",function(req,res){

    if(!req.body.name || !req.body.email){
        res.status(400).send({message:"Either name or email is passed empty"});
    }

    const userObj={
        id:uuid.v4(),
        name:req.body.name,
        email:req.body.email
    };

    usersDB.push(userObj);

    res.status(201).send(userObj);
})

app.get("/users/:id",function(req,res){

    const id=req.params.id;

    const user=usersDB.find((userElement)=>{
        return userElement.id==id;
    })

    if(!user){
        res.status(404).send({message:"User id is invalid"});
    }
    res.json(user);
})

app.put("/users/:id",function(req,res){

    const id=req.params.id;

    const user=usersDB.find((userElement)=>{
        return userElement.id==id;
    })
    
    if(!user){
        res.status(404).send({message:"User id is invalid"});
    }

    const keysToBeUpdated =Object.keys(req.body);

    keysToBeUpdated.forEach((key)=>{
        user[key]=req.body[key];
    })

    res.send(user);
})

app.delete("/users",function(req,res){
    usersDB=[];

    res.send({message:"All users deleted successfully"});
})


app.delete("/users/:id",function(req,res){

    const id=req.params.id;

    const user=usersDB.find((userElement)=>{
        return userElement.id==id;
    })
    
    if(!user){
        res.status(404).send({message:"User id is invalid"});
    }

    usersDB = usersDB.filter((user)=>{
        return user.id!=id;
    })
    
    res.send({message:`user with userId: ${id} deleted successfully`});
})





app.listen(8000,()=>{
    console.log("Application is listening on port 8000");
})

