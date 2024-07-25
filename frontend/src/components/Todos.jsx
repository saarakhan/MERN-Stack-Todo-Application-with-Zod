export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <div key={todo.id}>
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
              <button>
                {todo.completed == true ? "Completed" : "Mark as Complete"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
