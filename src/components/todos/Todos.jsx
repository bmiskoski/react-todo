import { useRef } from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import DotsIcon from "../icons/DotsIcon";

function Todos({ status, todos, setTodos }) {
  const nameInput = useRef();
  const bodyInput = useRef();

  const handleOptions = (id) => {
    setTodos(
      [...todos].map((todo) => {
        if (todo.id === id) {
          todo.isOptionsActive = !todo.isOptionsActive;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const markTodoAsInitial = (id) => {
    setTodos(
      [...todos].map((todo) => {
        if (todo.id === id) {
          todo.status = "initial";
        }
        return todo;
      })
    );
  };

  const markTodoAsInProgress = (id) => {
    setTodos(
      [...todos].map((todo) => {
        if (todo.id === id) {
          todo.status = "in-progress";
        }
        return todo;
      })
    );
  };

  const markTodoAsCompleted = (id) => {
    setTodos(
      [...todos].map((todo) => {
        if (todo.id === id) {
          todo.status = "done";
        }
        return todo;
      })
    );
  };

  const editTodo = (id) => {
    setTodos(
      [...todos].map((todo) => {
        if (todo.id === id) {
          todo.isEditing = true;
          todo.isOptionsActive = false;
        }
        return todo;
      })
    );
  };

  const cancelEdit = (id) => {
    setTodos(
      [...todos].map((todo) => {
        if (todo.id === id) {
          todo.isEditing = false;
          todo.isOptionsActive = false;
        }
        return todo;
      })
    );
  };

  const updateTodo = (id) => {
    setTodos(
      [...todos].map((todo) => {
        if (todo.id === id) {
          todo.isEditing = false;
          todo.title = nameInput.current.value;
          todo.body = bodyInput.current.value;
        }
        return todo;
      })
    );
  };
  return (
    <>
      {todos.map((todo) => (
        <>
          {todo.status === status && (
            <div
              className={`${todo.status === "initial" ? "bg-yellow-100" : ""} ${
                todo.status === "in-progress" ? "bg-blue-100" : ""
              } ${
                todo.status === "done" ? "bg-green-100" : ""
              } col-span-12 mb-5 p-5 rounded-xl shadow-md transition`}
              key={todo.id}
            >
              <div className="flex justify-between mb-5 relative ">
                {!todo.isEditing ? (
                  <h2
                    className={`text-2xl leading-none ${
                      todo.status === "done" ? "line-through" : ""
                    }`}
                  >
                    {todo.title}
                  </h2>
                ) : (
                  <input
                    type="text"
                    className="py-2 pl-3 w-full mr-6 rounded-md"
                    defaultValue={todo.title}
                    ref={nameInput}
                  />
                )}
                <button onClick={() => handleOptions(todo.id)}>
                  <DotsIcon />
                </button>
                {todo.isOptionsActive && (
                  <div className="absolute top-0 right-10 bg-white p-4 w-40 rounded-xl flex items-start flex-col">
                    {!todo.isEditing ? (
                      <button
                        className="border-b border-yellow-400 w-full text-left pl-2 pb-2 mb-2"
                        onClick={() => editTodo(todo.id)}
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        className="border-b border-yellow-400 w-full text-left pl-2 pb-2 mb-2"
                        onClick={() => cancelEdit(todo.id)}
                      >
                        Cancel Edit
                      </button>
                    )}
                    <button
                      className="pl-2 w-full text-left"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <div className="mb-2">
                {!todo.isEditing ? (
                  <p
                    className={`text-lg ${
                      todo.status === "done" ? "line-through" : ""
                    }`}
                  >
                    {todo.body}
                  </p>
                ) : (
                  <textarea
                    className="w-full h-28 py-2 pl-3 mb-2 rounded-md"
                    defaultValue={todo.body}
                    ref={bodyInput}
                  ></textarea>
                )}
              </div>
              <div className="mt-6 pt-2 border-t border-gray-400">
                {!todo.isEditing ? (
                  <div>
                    {todo.status === "initial" && (
                      <div className="flex justify-end">
                        <button
                          className="flex border-b border-b-blue-400"
                          onClick={() => markTodoAsInProgress(todo.id)}
                        >
                          In-progress?
                          <ArrowRightIcon />
                        </button>
                      </div>
                    )}
                    {todo.status === "in-progress" && (
                      <div className="flex justify-between">
                        <button
                          className="flex border-b border-b-yellow-400"
                          onClick={() => markTodoAsInitial(todo.id)}
                        >
                          <ArrowLeftIcon />
                          Return to start?
                        </button>
                        <button
                          className="flex border-b border-b-green-400"
                          onClick={() => markTodoAsCompleted(todo.id)}
                        >
                          Mark as done?
                          <ArrowRightIcon />
                        </button>
                      </div>
                    )}
                    {todo.status === "done" && (
                      <button
                        className="flex border-b border-b-blue-400"
                        onClick={() => markTodoAsInProgress(todo.id)}
                      >
                        <ArrowLeftIcon />
                        In progress?
                      </button>
                    )}
                  </div>
                ) : (
                  <button
                    className="border border-yellow-500 bg-white hover:bg-green-300 hover:text-white hover:border-green-300 transition py-2 px-6"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
}

export default Todos;
