// CRIANDO SERVIDOR LOCAL
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/plain"
    });
    res.end("Ola, mundo!");
});

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})