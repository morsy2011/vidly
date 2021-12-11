const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url ==='/') {
        res.write('Mahmoud Morsy');
        res.end();
    }

    if (req.url ==='/morsy/king') {
        res.write(JSON.stringify([1, 2, 3, 4, 5, 6]));
        res.end();
    }
});

server.listen(4000);

console.log('Listening on port 400....')