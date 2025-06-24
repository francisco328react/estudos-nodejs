require('dotenv').config();

const Task = require('./model/Task');

const { authenticate } = require('./middlewares/auth');
const authController = require('./controllers/authController');

app.post('/tasks', validateTaskTitle, async (req, res) => {
    try {
        const newTask = await Task.create(req.body); // salvar no MongoDB
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.get('/tasks/:id', async (req, res) => {
    try {
        const taskId = await Task.find();
        res.json(taskId);
    } catch (error) {
        res.tatus(500).json({ error: error.message });
    }
})

// Rotas públicas
app.post('/register', authController.register);
app.post('/login', authController.login);

// Rota protegida
app.get('/profile', authenticate, (req, res) => {
  res.json({ message: `Você está autenticado! ID: ${req.userId}` });
});

// app.delete('/tasks/:id', (req, res) => {
//     try {
//         const deleteTaskId = Task.find();
//         res.delete(deleteTaskId);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// })


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));