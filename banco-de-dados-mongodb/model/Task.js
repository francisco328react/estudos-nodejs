const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { title: String, required: true },
    done: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', TaskSchema);