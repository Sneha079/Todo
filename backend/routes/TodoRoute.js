const { Router, response } = require("express");
const { getTodo, addTodo, deleteTodo, updateTodo } = require("../controllers/TodoController");

const route = Router();

route.get("/", getTodo)

route.post("/" , addTodo);
route.delete("/:id", deleteTodo);

route.put("/:id" , updateTodo);

module.exports = route;