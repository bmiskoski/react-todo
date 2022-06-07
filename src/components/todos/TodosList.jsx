import { useRef } from "react";
import DotsIcon from "../icons/DotsIcon";

function TodosList(props) {
  const nameInput = useRef();
  const bodyInput = useRef();

  const handleOptions = (id) => {
    props.setTodos(
      [...props.todos].map((todo) => {
        if (todo.id === id) {
          todo.isOptionsActive = !todo.isOptionsActive;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    props.setTodos([...props.todos].filter((todo) => todo.id !== id));
  };

  const markTodoAsCompleted = (id) => {
    props.setTodos(
      [...props.todos].map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  };

  const editTodo = (id) => {
    props.setTodos(
      [...props.todos].map((todo) => {
        if (todo.id === id) {
          todo.isEditing = true;
          todo.isOptionsActive = false;
        }
        return todo;
      })
    );
  };

  const cancelEdit = (id) => {
    props.setTodos(
      [...props.todos].map((todo) => {
        if (todo.id === id) {
          todo.isEditing = false;
          todo.isOptionsActive = false;
        }
        return todo;
      })
    );
  };

  const updateTodo = (id) => {
    props.setTodos(
      [...props.todos].map((todo) => {
        if (todo.id === id) {
          todo.isEditing = false;
          todo.title = nameInput.current.value;
          todo.body = bodyInput.current.value;
        }
        return todo;
      })
    );
  };

  return props.todos.map((todo) => (
    <div
      className={`col-span-1 p-5 rounded-xl shadow-md transition ${
        todo.isDone ? "bg-green-200" : "bg-yellow-100"
      }`}
      key={todo.id}
    >
      <div className="flex justify-between mb-5 relative ">
        {!todo.isEditing ? (
          <h2
            className={`text-2xl leading-none ${
              todo.isDone ? "line-through" : ""
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
          <p className={`text-lg ${todo.isDone ? "line-through" : ""}`}>
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
      <div className="flex justify-end">
        {!todo.isEditing ? (
          <form action="#">
            <input
              className="mr-1 cursor-pointer"
              type="checkbox"
              onChange={() => markTodoAsCompleted(todo.id)}
            />
            <label>Done</label>
          </form>
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
  ));
}

export default TodosList;
