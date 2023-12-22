
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const UpdateTask = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://technology-and-electronics-server-gamma.vercel.app/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log(result);

      if (result.insertedId) {
        Swal.fire("A new task has been added!");
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-4 md:p-8 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Update Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="form-control">
          <label htmlFor="name" className="label text-white">
            Title
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" placeholder="Title" className="input input-bordered w-full" />}
          />
        </div>

        <div className="form-control">
          <label htmlFor="type" className="label text-white">
            Priority
          </label>
          <Controller
            name="type"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" placeholder="Priority" className="input input-bordered w-full" />}
          />
        </div>

        <div className="form-control">
          <label htmlFor="price" className="label text-white">
            Deadline
          </label>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" placeholder="Deadline" className="input input-bordered w-full" />}
          />
        </div>

        <div className="form-control">
          <label htmlFor="description" className="label text-white">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" placeholder="Description" className="input input-bordered w-full" />}
          />
        </div>

        <button
          type="submit"
          className="btn mt-4 text-white btn-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
