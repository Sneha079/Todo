const Todo = require("../models/TodoSchema");

const getTodo = async (req, res) => {
    try {
        const getTodo = await Todo.find({})
        res.status(201).json({ getTodo });
    } catch (error) {
        console.log(error);
    }
};



const addTodo = async (req, res) => {
    try {

        const { task } = req.body;
        let formatedobj = {
            "id": Date.now(),
            "task": task,
        }
        const newTodo = new Todo(formatedobj);
        const savedTodo = await newTodo.save();

        res.status(201).json({
            todo: savedTodo
        })

    } catch (error) {
        console.log(error);

    }

}

const deleteTodo = async (req, res) => {
    try {

        const { id } = req.params;
        const data = await Todo.findByIdAndDelete(id);
        console.log(id);
        res.status(201).json({ data })
    } catch (error) {
        console.log(error);

    }

}

const updateTodo = async (req,res)=>{
    try {
        const {id} = req.params;
        const {task} =req.body;
         await Todo.findByIdAndUpdate(id ,{task})
       res.status(201).json("update successfully");
        }
         catch (error) {
        console.log(error);
        
    }
}
module.exports = { getTodo, addTodo, deleteTodo, updateTodo }