import React from "react";
import CloseIcon from "../icons/CloseIcon";

function CreateTodoForm(props) {
  return (
    <div>
      {props.showForm && (
        <div>
          <div className="fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-yellow-100 rounded-xl shadow-2xl p-4 w-96">
              <div className="fixed -top-3 -right-3">
                <button onClick={() => props.setShowForm(false)}>
                  <CloseIcon />
                </button>
              </div>
              <h3 className="text-2xl text-center mb-5 uppercase underline">
                Add Todo
              </h3>
              <form action="#" onSubmit={(event) => props.createTodo(event)}>
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

export default CreateTodoForm;
