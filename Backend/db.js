/*
* Todo {
  title: string;
  description:string;
  completed : boolean 
}
*/

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/").then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
  todo
}