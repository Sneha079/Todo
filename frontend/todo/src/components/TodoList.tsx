
import type { Todo } from '../types/todo'
import TodoItem from './TodoItem';

interface TodoListProps {
  todos:Todo[];
  // toggleTodo: (id: string)=>void;
  handleDelete :(id:string)=> void;
  onUpdated:()=>void;
}

const TodoList = ({todos , handleDelete, onUpdated}: TodoListProps) => {
  return (
    <div>
      {todos.map((todo)=>(
        <TodoItem key={todo._id} todo={todo}  handleDelete={handleDelete}  onUpdated={onUpdated} />

      ))}
    </div>
  )
}

export default TodoList