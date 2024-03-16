// Create web server
// 1. Create server
// 2. Create route
// 3. Create response
// 4. Listen to port

// 1. Create server
const http = require('http');
const fs = require('fs');
const path = require('path');
const comments = require('./comments');
const { read } = require('fs');

const server = http.createServer((req, res) => {
    // 2. Create route
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/api/comments') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify(comments));
        res.end();
    } else {
        fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
            if (err) {
                throw err;
            }
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    }
});

// 4. Listen to port
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
