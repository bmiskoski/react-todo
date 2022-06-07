import { useState } from "react";
import Header from "./header/Header";
import CreateTodoForm from "./todos/CreateTodoForm";
import NoTodos from "./todos/NoTodos";
import TodosList from "./todos/TodosList";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [todos, setTodos] = useState([]);
  const [idForTodos, setIdForTodos] = useState(1);

  const createTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: idForTodos,
        title: event.target.title.value,
        body: event.target.body.value,
        isDone: false,
        isEditing: false,
        isOptionsActive: false,
      },
    ]);
    setIdForTodos((prevIdForTodos) => prevIdForTodos + 1);
    setShowForm(false);
  };

  return (
    <div className="container mx-auto">
      <Header setShowForm={setShowForm} />
      <div className="grid grid-cols-2 gap-4">
        {todos.length > 0 ? (
          <TodosList todos={todos} setTodos={setTodos} />
        ) : (
          <NoTodos setShowForm={setShowForm} />
        )}
      </div>
      <CreateTodoForm
        showForm={showForm}
        setShowForm={setShowForm}
        createTodo={createTodo}
      />
    </div>
  );
}

export default App;
