// import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const UpdateTask = () => {

const task = useLoaderData();
const {_id,name,description,price,type} = task;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const type = form.type.value;

    const UpdatedProduct = { name, description, price, type };
    console.log(UpdatedProduct);

    fetch(`https://job-task-server-lemon.vercel.app/task/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Task updated!");
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-4 md:p-8 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Update Task</h2>
      <form onSubmit={handleUpdate} className="grid gap-4">
        <div className="form-control">
          <label htmlFor="name" className="label text-white">
            Title
          </label>
          <input type="text" name="name" id="name" defaultValue={name} className="input input-bordered w-full" />
        </div>

        <div className="form-control">
          <label htmlFor="type" className="label text-white">
            Priority
          </label>
          <input type="text" name="type" id="type" defaultValue={type} className="input input-bordered w-full" />
        </div>

        <div className="form-control">
          <label htmlFor="price" className="label text-white">
            Deadline
          </label>
          <input type="text" name="price" id="price" defaultValue={price} className="input input-bordered w-full" />
        </div>

        <div className="form-control">
          <label htmlFor="description" className="label text-white">
            Description
          </label>
          <input type="text" name="description" id="description" defaultValue={description} className="input input-bordered w-full" />
        </div>

        <button
          type="submit"
          className="btn mt-4 text-white btn-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
