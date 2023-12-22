import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const CreateNewTask = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const type = form.type.value;

    const newProduct = { name, description, price, type };
    console.log(newProduct);

    fetch("https://technology-and-electronics-server-gamma.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("A new task has been added!");
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-4 md:p-8 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Create New Task</h2>
      <form onSubmit={handleAddProduct} className="grid gap-4">
        <div className="form-control">
          <label htmlFor="name" className="label text-white">
            Title
          </label>
          <input type="text" name="name" id="name" placeholder="Title" className="input input-bordered w-full" />
        </div>

        <div className="form-control">
          <label htmlFor="type" className="label text-white">
            Priority
          </label>
          <input type="text" name="type" id="type" placeholder="Priority" className="input input-bordered w-full" />
        </div>

        <div className="form-control">
          <label htmlFor="price" className="label text-white">
            Deadline
          </label>
          <input type="text" name="price" id="price" placeholder="Deadline" className="input input-bordered w-full" />
        </div>

        <div className="form-control">
          <label htmlFor="description" className="label text-white">
            Description
          </label>
          <input type="text" name="description" id="description" placeholder="Description" className="input input-bordered w-full" />
        </div>

        <button
          type="submit"
          className="btn mt-4 text-white btn-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600"
        >
          Create New Task
        </button>
      </form>
    </div>
  );
};

export default CreateNewTask;
