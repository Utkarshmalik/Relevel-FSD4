
const http = require("http");


const response={
    message:"This is JSON response from our HTTP server"
}

//Add Listerner

const listener=function(req,res){
    console.log("Server is processing your request");
    // res.setHeader("Content-Type","application/json");

 res.setHeader("Content-Type","text/csv");
 res.setHeader("Content-Disposition","attachment;fileName=details.csv");

    res.writeHead(200);
    res.end(`name,rollNumber,school\nUtkarsh,25,DPS`);
}

//create a simple server
const simpleServer= http.createServer(listener);


simpleServer.listen(8080);