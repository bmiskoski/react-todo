import AddTodoIcon from "../icons/AddTodoIcon";

function Header({ setShowForm, todos, setTodos }) {
  const handleCheckAllTodos = () => {
    setTodos(
      [...todos].map((todo) => {
        todo.isDone = true;
        return todo;
      })
    );
  };

  const handleUnheckAllTodos = () => {
    setTodos(
      [...todos].map((todo) => {
        todo.isDone = false;
        return todo;
      })
    );
  };

  const handleDeleteCheckedTodos = () => {
    setTodos([...todos].filter((todo) => !todo.isDone));
  };

  return (
    <>
      <nav
        className={
          "flex justify-between align-center pt-5 md:pb-5 mb-3 sm:mb-0"
        }
      >
        <a href="/">
          <h1 className="text-3xl font-bold">todo|app</h1>
        </a>
        <div className="flex items-center">
          {todos.length > 0 && (
            <div className="hidden md:block">
              <button
                className="mr-5 border-b border-b-green-400 transition"
                onClick={() => handleCheckAllTodos()}
              >
                Check all
              </button>
              <button
                className="mr-5 border-b border-b-yellow-400 transition"
                onClick={() => handleUnheckAllTodos()}
              >
                Uncheck all
              </button>
              <button
                className="border border-red-600 bg-red-600 text-white py-2 px-6 mr-4"
                onClick={() => handleDeleteCheckedTodos()}
              >
                Delete checked
              </button>
            </div>
          )}
          <button onClick={() => setShowForm(true)}>
            <AddTodoIcon />
          </button>
        </div>
      </nav>
      {todos.length > 0 && (
        <div className="mb-10 sm:flex items-center justify-center md:hidden text-center">
          <div className="mb-5 sm:mb-0">
            <button
              className="mr-5 border-b border-b-green-400 transition"
              onClick={() => handleCheckAllTodos()}
            >
              Check all
            </button>
            <button
              className="sm:mr-5 border-b border-b-yellow-400 transition"
              onClick={() => handleUnheckAllTodos()}
            >
              Uncheck all
            </button>
          </div>
          <button
            className="border border-red-600 bg-red-600 text-white py-2 px-6"
            onClick={() => handleDeleteCheckedTodos()}
          >
            Delete checked
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
