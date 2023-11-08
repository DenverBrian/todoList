import { useState } from "react";
import Tasks from "./Tasks";
import "./App.css";

function App() {
  type listOfTasks = {
    id: number;
    task: string;
    completed: boolean;
  };

  const [todoList, setTodoList] = useState<listOfTasks[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      task: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    console.log(todoList);
  };

  const deleteTask = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const updateTask = (id: number) => {
    setTodoList(
      todoList.map((item) => item.id === id ? { ...item, completed: true }: item)
    );
  };

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={addTask}>add Task</button>
      {todoList.map((list) => {
        return <Tasks list={list} deleteTask={deleteTask} updateTask={updateTask} />;
      })}
    </>
  );
}

export default App;
