import AddTodoIcon from "../icons/AddTodoIcon";
import logo from "../../todo.png";

function Header({ setShowForm, todos, setTodos }) {
  const handleDeleteCheckedTodos = () => {
    setTodos([...todos].filter((todo) => todo.status !== "done"));
  };

  return (
    <header>
      <nav
        className={
          "flex justify-between align-center pt-5 md:pb-5 mb-3 sm:mb-0"
        }
      >
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" width="36px" className="mr-2" />
          <h1 className="text-3xl font-bold">todo|app</h1>
        </a>
        <div className="flex items-center">
          {todos.length > 0 && (
            <div className="hidden md:block">
              <button
                className="border border-red-600 bg-red-600 text-white py-2 px-6 mr-4"
                onClick={() => handleDeleteCheckedTodos()}
              >
                Delete done todos
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
          <button
            className="border border-red-600 bg-red-600 text-white py-2 px-6"
            onClick={() => handleDeleteCheckedTodos()}
          >
            Delete checked
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
