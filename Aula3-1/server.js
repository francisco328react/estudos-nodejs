// Rodando API com EXPRESS
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>Minha primeira API com Express!</h1>`);
});

// Aula2-2
// GET - Retornar Dados
app.get('/users', () => {
    res.json([{ name: "Francisco" }, { name: "Raquel" }]);
});

// POST - Receber Dados
app.post('/users', () => {
    res.status(201).json({ message: "Usuário criado !" });
});

// GET - Usando Parâmetros de rotas
app.get('/users/:id', (req, res) => {
    const userId = res.params.id; // Acessa o :id
    res.send(`Usuário: ${userId}`);
});

// Aula3-3
// Middleware global (ex: para logs)
app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next(); // Passa para proxima função
});

// Body Parser (para ler JSON no POST)
// habilita o req.body
app.use(express.json());

app.post('/products', (req, res) => {
    console.log(req.body); // Dados enviados no POST
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});