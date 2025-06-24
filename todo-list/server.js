const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

// Cria middleware
app.use((req, res, next) => {
    if (!req.body.title) { // Se title não existir, retorna erro 400 (Bad Request)
        return res.status(400).json({ 
            error: "O campo 'title' é obrigatório!" 
        });
    }
    next(); // Se tudo OK, passa para a próxima função
});

// POST - criar as tarefas
app.post('/tasks', (req, res) => {
    tasks.push(req.body);
    res.status(201).json(req.body);
});

// GET - lista as tarefas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(3000, () => {
    console.log('API rodando!');
});