import AddTodoIcon from "../icons/AddTodoIcon";

const Header = (props) => {
  return (
    <nav className="flex justify-between align-center py-5">
      <h1 className="text-3xl font-bold leading-none">todo</h1>
      <button onClick={() => props.setShowForm(true)}>
        <AddTodoIcon />
      </button>
    </nav>
  );
};

export default Header;
