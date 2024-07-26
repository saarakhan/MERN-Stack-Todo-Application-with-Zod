export function Todos({ todos }) {
  return (
    <>
    <br />
    <h3 className="text-center mt-2 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">See all your <span className="text-blue-600 dark:text-blue-500">Todos</span></h3>
    <div className="m-2 p-2 flex flex-row flex-wrap justify-center align center">
      {todos.map(function (todo) {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="max-w-sm m-2  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {todo.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {todo.description}
              </p>
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
                    })
                }
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {todo.completed == true ? "Completed" : "Mark as Complete"}
              </button>
            </div>
        );
      })}
    </div>
    </>

  );
}
