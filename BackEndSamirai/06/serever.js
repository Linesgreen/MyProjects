const http = require("http");
const fs = require("fs");

const delay = (ms) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve()
        },ms)
    })
}
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err,data) =>{
            if (err) reject(err);
            else resolve(data);
        })
    })
}


const server = http.createServer( async (req, res) =>{
    switch (req.url) {
        case '/home' : {
            const  data = await readFile('pages/about.html')
            res.write(data);
            res.end();
            break;
        }
        case '/about' : {
          await delay(3000)
                res.write('about')
                res.end();
        break;
        }
        default : {
            res.write('404 NOT FOUND')
            res.end();
        }
    }
})

server.listen(3003);