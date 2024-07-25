import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, [todos]);

  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
