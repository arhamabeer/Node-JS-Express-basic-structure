const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todoName : {type: String}
})

const todoModel =  mongoose.model('todo', todoSchema);

module.exports = todoModel;