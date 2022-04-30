import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { ITask } from "./interfaces";

import "./styles/styles.css";

function App() {
  const [task, setTask] = useState(""); // or "useState<string>('')"
  const [todoList, setTodoList] = useState<ITask[]>([]);

  function addTask() {
    const randomID = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    const newTask = {
      id: randomID,
      nameTask: task,
    };

    setTodoList([newTask, ...todoList]);
	setTask('')
  }

  function deleteTask(id: number) {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <header>
        <h2>Lists</h2>

        <input
          type="text"
          autoComplete="off"
          placeholder="Escrever task..."
          name="task"
          className="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask} type="submit" className="btn-header">
          Adicionar Task
        </button>
      </header>

      <div className="line"></div>

      {todoList.length
        ? todoList.map((task, id) => (
            <TodoTask task={task} key={id} onClick={deleteTask}/>
          ))
        : null}
    </div>
  );
}

export default App;
