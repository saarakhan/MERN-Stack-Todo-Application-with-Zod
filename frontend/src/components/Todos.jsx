export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <div key={todo._id}>
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
              <button
                onClick={() =>
                  fetch(`http://localhost:3000/todos/${todo._id}`, {
                    method: "DELETE",
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Network response was not ok");
                      }
                      return response.json();
                    })
                    .then((data) => {
                      console.log(data);
                      // Handle the data, e.g., update the UI
                    })
                }
              >
                {todo.completed == true ? "Completed" : "Mark as Complete"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
