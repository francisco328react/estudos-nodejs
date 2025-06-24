const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todo-api')
    .then(() => console.log("Conectado ao MongoDB!"))
    .catch((err) => console.log(`Error de conexão: `, err));

module.exports = { mongoose }