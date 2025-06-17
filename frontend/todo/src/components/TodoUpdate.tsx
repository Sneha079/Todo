import axios from "axios";
import { useState } from "react"

interface Todo{
    _id:string;
    task:string;
}

interface TodoUpdateProps {
    todo:Todo;
    onClose :()=> void;
    onUpdate :()=> void;
}



const TodoUpdate:React.FC<TodoUpdateProps> = ({todo , onClose, onUpdate}) => {
    const [task, setTask]=useState(todo.task);
    const handleUpdate =async ()=>{
        try {
            await axios.put(`https://todobackend-omega-lemon.vercel.app/api/todo/${todo._id}`, {task,});
            onUpdate();
            onClose();
            
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
        <h3>Udate Todo</h3>
        <input type="text"
        value={task}
        onChange={(e)=> setTask(e.target.value)}
        ></input>
        <button onClick={handleUpdate}>Save</button>
    </div>
  )
}

export default TodoUpdate