function NoTodos(props) {
  return (
    <div>
      <h2 className="text-xl mb-4">No todos &#128533;</h2>
      <button
        className="border border-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-white transition py-2 px-6"
        onClick={() => props.setShowForm(true)}
      >
        Create?
      </button>
    </div>
  );
}

export default NoTodos;
