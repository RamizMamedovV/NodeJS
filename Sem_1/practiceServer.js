const http = require('http');

let count = 0;

const server = http.createServer((req, res) => {
    const headers = { 
        'Content-Type': 'text/html; charset=utf-8' 
    }

    
    // Игнорируем запросы к favicon.ico иначе count увеличивается на 2
    if (req.url === '/favicon.ico') {
        res.writeHead(204, { 'Content-Type': 'image/x-icon' });
        res.end();
        return;
    }

    if (req.url === '/') {
        // count++;
        res.writeHead(200, headers);
        res.end(`<a href="./about"> About </a><p>Count: ${count++}</p>`);
    } else if (req.url === '/about') {
        // count++;
        res.writeHead(200, headers);
        res.end(`<a href="./"> Home </a><p>Count: ${count++}</p>`);
    } else {
        // count++;
        res.writeHead(200, headers);
        res.end(`<h1> 404 this page is not found </h1><p>Count: ${count++}</p>`);
    }
    
    // res.setHeader('<h3> Hello </h3>');
    
});

const port = '3000';
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});