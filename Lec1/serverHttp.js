const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    const headers = {
        'Content-Type': 'text/html; charset=UTF-8'
    };

    if (req.url === '/') {
        res.writeHead(200, headers);
        res.end('<h1>Добро пожаловать на мой сайт Rustam))!</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, headers);
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(404, headers);
        res.end('<h1>Страница не найдена!</h1>');
    }
});

const port = 3000;
server.listen(port, '0.0.0.0', () => {
    console.log(`Сервер запущен на порту ${port}`);
});





/*const http = require('http'); 

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Привет, мир!');

    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('------!');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

// server.listen(port, '0.0.0.0', () => {
//     console.log(`Сервер запущен на порту ${port}`);
// });*/