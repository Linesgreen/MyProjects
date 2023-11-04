const  http = require('http');
const  fs = require('fs')
const path = require('path');
let reqCount = 0;

const  server = http.createServer((req, res) => {
    if(req.url !== '/favicon.ico') {
        console.log(req.url);
        reqCount ++;
    }
    if (req.url === '/favicon.ico') {
        // определяем путь к файлу
        const faviconPath = path.join(__dirname, 'favicon.ico');
        // читаем файл
        fs.readFile(faviconPath, function(err, data) {
            // если ошибка, отправляем статус 404
            if (err) {
                res.writeHead(404);
                res.end();
            } else {
                // иначе отправляем статус 200 и содержимое файла
                res.writeHead(200, {'Content-Type': 'image/x-icon'});
                res.end(data);
            }
        });
    } else {
        switch (req.url) {
            case "/students": res.write('students')
                break;
            case "/courses" : res.write('front + back')
                break;
            default: res.write("404 not found")
        }
        res.write("it-kamasutra " + reqCount);
        res.end(); }
})

server.listen(3003);
