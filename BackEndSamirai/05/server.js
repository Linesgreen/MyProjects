


// Import modules 
const favicon = require('serve-favicon'); 
const express = require('express') 
const app = express() 
  
// Returns a middleware to serve favicon 
app.use(favicon(__dirname + '/favicon.ico')); 



const http = require('http')
let requestsCount = 0;

const server = http.createServer((request, response) => {

    requestsCount++

    switch(request.url) {

        case "/" : 
        case "/students" :
        response.write("Students"); break;
        case "/courses":
            response.write("FRONT + BACK"); break;
            default: 
                response.write("404 not found")
    }
    response.write("Requests: " + requestsCount)
    response.end()    
})

server.listen(3003)
