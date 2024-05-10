import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: "Description 1",
      rowAssigned: "Eric",
    },
    {
      rowNumber: 2,
      rowDescription: "Description 2",
      rowAssigned: "Eric",
    },
    {
      rowNumber: 3,
      rowDescription: "Description 3",
      rowAssigned: "Eric",
    },
  ]);

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "New Description",
        rowAssigned: "User 3",
      };
      setTodos(todos=>[...todos, newTodo]);
    }
  };

  return (
    // JSX(Javascript XML) - wrapper allows us to write html in react app
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your TODO's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add new todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
