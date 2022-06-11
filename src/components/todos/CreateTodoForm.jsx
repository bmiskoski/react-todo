import React, { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";

function CreateTodoForm({
  showForm,
  setShowForm,
  todos,
  setTodos,
  idForTodos,
  setIdForTodos,
}) {
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [bodyErrorMessage, setBodyErrorMessage] = useState("");

  const handleFormClose = () => {
    setTitleErrorMessage("");
    setBodyErrorMessage("");
    setShowForm(false);
  };

  const createTodo = (event) => {
    event.preventDefault();
    if (
      event.target.title.value.length === 0 &&
      event.target.body.value.length === 0
    ) {
      setTitleErrorMessage("Please enter todo title!");
      setBodyErrorMessage("Please enter todo!");
    } else if (event.target.title.value.length === 0) {
      setTitleErrorMessage("Please enter todo title!");
    } else if (event.target.body.value.length === 0) {
      setBodyErrorMessage("Please enter todo!");
    } else {
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
      setTitleErrorMessage("");
      setBodyErrorMessage("");
    }
  };

  const handleTitleOnChangeError = (event) => {
    if (event.target.value.length !== 0) {
      setTitleErrorMessage("");
    } else {
      setTitleErrorMessage("Please enter todo title!");
    }
  };

  const handleBodyOnChangeError = (event) => {
    if (event.target.value.length !== 0) {
      setBodyErrorMessage("");
    } else {
      setBodyErrorMessage("Please enter todo!");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      {showForm && (
        <div>
          <div className="fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-yellow-100 rounded-xl shadow-2xl p-4 w-72 sm:w-96">
              <div className="fixed -top-3 -right-3">
                <button onClick={() => handleFormClose()}>
                  <CloseIcon />
                </button>
              </div>
              <h3 className="text-2xl text-center mb-5 uppercase underline">
                Add Todo
              </h3>
              <form action="#" onSubmit={(event) => createTodo(event)}>
                <div className="mb-3">
                  <label className="block mb-2">
                    Title <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-1 pl-2"
                    name="title"
                    onChange={(event) => handleTitleOnChangeError(event)}
                  />
                  {titleErrorMessage && (
                    <small className="text-red-600">{titleErrorMessage}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label className="block mb-2">
                    Body <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    className="w-full h-28 rounded-xl p-2"
                    name="body"
                    onChange={(event) => handleBodyOnChangeError(event)}
                  ></textarea>
                  {bodyErrorMessage && (
                    <small className="text-red-600">{bodyErrorMessage}</small>
                  )}
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

export default CreateTodoForm;
