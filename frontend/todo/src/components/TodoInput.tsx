import { useState } from "react";
import { Button, InputBox, MainContainer } from "./TodoInputstyles"

interface props {
  addTodo: (task: string) => void;
}
const TodoInput = ({ addTodo }: props) => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputData.trim() === "") return;

    addTodo(inputData);
    setInputData("");
    console.log(inputData);
   
  }

  return (
    <form onSubmit={handleSubmit}>
      <MainContainer>
        <InputBox type="text"
          placeholder="Enter a task"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        ></InputBox>
        <Button type='submit'>Add Task</Button>
      </MainContainer>
    </form>
  )
}

export default TodoInput