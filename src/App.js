import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  const todos = [
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
  ];
  return (
    // JSX(Javascript XML) - wrapper allows us to write html in react app
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your TODO's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
