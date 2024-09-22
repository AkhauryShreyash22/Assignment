const http = require("http");

const create_server = http.createServer((req, res) => {
    res.end('Hello world');
});

create_server.listen(3000,() => console.log('Application Started'));