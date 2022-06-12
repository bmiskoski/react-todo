import Todos from "./Todos";

function TodosList({ todos, setTodos }) {
  return (
    <>
      <div className="col-span-1 px-3">
        <h3 className="text-xl font-bold mb-5 border-b border-b-yellow-400">
          Todos
        </h3>
        <Todos status="initial" setTodos={setTodos} todos={todos} />
      </div>
      <div className="col-span-1 px-3">
        <h3 className="text-xl font-bold mb-5 border-b border-b-blue-400">
          In progress
        </h3>
        <Todos status="in-progress" setTodos={setTodos} todos={todos} />
      </div>
      <div className="col-span-1 px-3">
        <h3 className="text-xl font-bold mb-5 border-b border-b-green-400">
          Done
        </h3>
        <Todos status="done" setTodos={setTodos} todos={todos} />
      </div>
    </>
  );
}

export default TodosList;
