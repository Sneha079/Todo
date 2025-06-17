import { useState } from "react";
import type { Todo } from "../types/todo"
import { DeleteButton, TodoItemData } from "./TodoInputstyles"
import UpdateModel from "./UpdateModel";
import TodoUpdate from "./TodoUpdate";


interface TodoItemsProps{
  todo: Todo;
onUpdated: () => void;
  handleDelete: (id: string)=> void;
}
const TodoItem = ({todo , handleDelete, onUpdated}: TodoItemsProps) => {
  const [openModel , setOpenModel]=useState(false); 
  return (
    <TodoItemData  >
      {todo.task}
      <div style={{display:'flex', gap:'20px'}}>
      <DeleteButton onClick={(e)=>{ e.stopPropagation(); handleDelete(todo._id);}}>Delete</DeleteButton>
      <button onClick={()=> setOpenModel(true)}>Update</button>
      </div>

      {openModel && (
        <UpdateModel onClose={()=> setOpenModel(false)}>
        <TodoUpdate  todo={todo} onClose={()=>setOpenModel(true)} onUpdate={onUpdated} />
        </UpdateModel>
      )}
      </TodoItemData>
  )
}

export default TodoItem