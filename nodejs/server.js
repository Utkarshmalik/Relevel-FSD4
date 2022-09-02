
const http = require("http");


const response={
    message:"This is JSON response from our HTTP server"
}

//Add Listerner

const listener=function(req,res){

    res.writeHead(200);

    switch(req.url){

        case "/name":
            res.end('Http Server response : Utkarsh');
            break;
        case "/about":
            res.end("Http Server response : About");
            break;
        case "/company":
            res.end("Http server response : A reputed MNC")
            break;
        default:
            res.end("Http Server response : Incorrect endpoint");
    }

}

//create a simple server
const simpleServer= http.createServer(listener);


simpleServer.listen(8080);