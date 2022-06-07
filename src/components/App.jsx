import { useState } from "react";
import Header from "./Header";
import CloseIcon from "./icons/CloseIcon";
import DotsIcon from "./icons/DotsIcon";

function App() {
  const [toggleForm, setToggleForm] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "The first task",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut placeat quaerat ex ut, ducimus impedit repellendus praesentium corrupti earum quasi eum sunt ipsum. Possimus nihil corporis velit.",
      isEditing: false,
      isDone: false,
    },
  ]);

  const [options, setOptions] = useState(false);

  const handleOptions = () => {
    setOptions(!options);
  };

  const handleEdit = (id) => {
    const editingTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;

        return todo;
      }
    });
    setTodos(editingTodos);
    setOptions(false);
  };

  const updateTodo = (id) => {
    console.log();
  };

  const createTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: 2,
        title: event.target.title.value,
        body: event.target.body.value,
        isEditing: false,
        isDone: false,
      },
    ]);
    setToggleForm(false);
  };

  return (
    <div className="container mx-auto">
      <Header setToggleForm={setToggleForm} />
      <div className="grid grid-cols-2 gap-4">
        {todos.length > 0 &&
          todos.map((todo) => (
            <div
              className="col-span-1 bg-yellow-100 p-5 rounded-xl shadow-md"
              key={todo.id}
            >
              <div className="flex justify-between mb-5 relative ">
                {!todo.isEditing && <h2 className="text-xl">{todo.title}</h2>}
                {todo.isEditing && (
                  <input
                    className="p-1 pl-3 w-full mr-10 rounded-md"
                    type="text"
                    autoFocus
                    defaultValue={todo.title}
                  />
                )}
                <button onClick={handleOptions}>
                  <DotsIcon />
                </button>
                {options && (
                  <div className="absolute top-0 right-10 bg-white p-4 w-40 rounded-xl flex items-start flex-col">
                    <button
                      onClick={() => handleEdit(todo.id)}
                      className="border-b border-yellow-400 w-full text-left pl-2 pb-2 mb-2"
                    >
                      Edit
                    </button>
                    <button className="pl-2 w-full text-left">Delete</button>
                  </div>
                )}
              </div>
              <div className="mb-2">
                {!todo.isEditing && <p>{todo.body}</p>}
                {todo.isEditing && (
                  <textarea
                    className="w-full h-36 rounded-xl p-2"
                    defaultValue={todo.body}
                  ></textarea>
                )}
              </div>
              <div className="flex justify-end">
                {!todo.isEditing && (
                  <form action="#">
                    <input className="mr-1" type="checkbox" />
                    <label>Done</label>
                  </form>
                )}
                {todo.isEditing && (
                  <button
                    className="border border-yellow-400 bg-white py-2 px-8"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
      {toggleForm && (
        <div>
          <div className="fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-yellow-100 rounded-xl shadow-2xl p-4 w-96">
              <div className="fixed -top-3 -right-3">
                <button onClick={() => setToggleForm(false)}>
                  <CloseIcon />
                </button>
              </div>
              <h3 className="text-2xl text-center mb-5 uppercase underline">
                Add Todo
              </h3>
              <form action="#" onSubmit={(event) => createTodo(event)}>
                <div className="mb-4">
                  <label className="block mb-2">Title</label>
                  <input type="text" className="w-full p-1 pl-2" name="title" />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Body</label>
                  <textarea
                    className="w-full h-28 rounded-xl p-2"
                    name="body"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="border border-yellow-400 bg-white py-2 px-8">
                    Add todo
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="h-screen w-full bg-white absolute top-0 left-0 opacity-90"></div>
        </div>
      )}
    </div>
  );
}

export default App;
