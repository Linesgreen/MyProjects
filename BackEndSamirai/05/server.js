

const http = require('http');
var path = require('path');
var fs = require('fs');


// Location of your favicon in the filesystem.
var FAVICON = path.join(__dirname, 'public', 'favicon.ico');

let requestsCount = 0;

const server = http.createServer((request, response) => {
   
    requestsCount++
    
    switch(request.url) {
        case '/favicon.ico' : 
        response.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream(FAVICON).pipe(response);
        return;
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


