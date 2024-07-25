/*
* Todo {
  title: string;
  description:string;
  completed : boolean 
}
*/

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo
}