const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/plain"
    });
    res.end("<h1>Meu Servidor Node</h1>");
});

server.listen(3000, () => {
    console.log("Servidor rodando no http://localhost:3000");
})