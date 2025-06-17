import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import type { Todo } from './types/todo';
import { Container } from "./components/TodoInputstyles"
import TodoList from "./components/TodoList";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
   const handleData = async () => {
      try {
        const data = await axios.get("https://todobackend-omega-lemon.vercel.app/api/todo");
        setTodos(data.data.getTodo);

      } catch (error) {
        console.log(error);

      }
    }

  useEffect(() => {
   
    handleData();

  }, [])

  const addTodo = async (text: string) => {



    try {
      const response = await axios.post("https://todobackend-omega-lemon.vercel.app/api/todo", {
        "task": text,
      });

      const newTodo: Todo = response.data.todo;
      setTodos((prevTodos) => [...prevTodos, newTodo]);


    } catch (error) {
      console.log(error);

    }

  }
    const handleDelete = async (id: string) => {
      try {
        const res = await axios.delete(`https://todobackend-omega-lemon.vercel.app/api/todo/${id}`);
        console.log(res);


        setTodos((prev) => prev.filter((todo) => todo._id !== id));

      } catch (error) {
        console.log(error);

      }

    }
  


    return (
      <>
        <Container>
          <h2> My To-Do </h2>
          <div>

            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} handleDelete={handleDelete}  onUpdated={handleData} />
          </div>

        </Container>
      </>
    )
  
}

export default App