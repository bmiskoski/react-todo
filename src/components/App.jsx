import { useState } from "react";
import Header from "./header/Header";
import CreateTodoForm from "./todos/CreateTodoForm";
import NoTodos from "./todos/NoTodos";
import TodosList from "./todos/TodosList";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) ?? [];
  });
  const [idForTodos, setIdForTodos] = useState(1);

  return (
    <div className="container px-5 mx-auto">
      <Header setShowForm={setShowForm} todos={todos} setTodos={setTodos} />
      <div className="grid grid-cols-12 gap-4">
        {todos.length > 0 ? (
          <TodosList todos={todos} setTodos={setTodos} />
        ) : (
          <NoTodos setShowForm={setShowForm} />
        )}
      </div>
      <CreateTodoForm
        showForm={showForm}
        setShowForm={setShowForm}
        todos={todos}
        setTodos={setTodos}
        idForTodos={idForTodos}
        setIdForTodos={setIdForTodos}
      />
    </div>
  );
}

export default App;
