import { useState } from "react";
export function CreateTodo(props) {
  //react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div >
    <h3 className="text-center m-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Add your <span className="text-blue-600 dark:text-blue-500">Todos</span></h3>

      <form className="max-w-md mx-auto mt-10">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_title"
            id="title"
            onChange={function (e) {
              const value = e.target.value;
              setTitle(e.target.value);
            }}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Todo Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_description"
            id="description"
            onChange={function (e) {
              const value = e.target.value;
              setDescription(e.target.value);
            }}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Todo Description
          </label>
        </div>
        <button
          // type="submit"
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(async function (res) {
              const json = await res.json();
              alert("Todo added successfully!");
            });
            props.setTodos([
              ...props.todos,
              {
                title,
                description,
              },
            ]);
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add a todo
        </button>
      </form>
    </div>
  );
}
