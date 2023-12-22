import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Todo = ({task,tasks,setTasks}) => {

  const {_id,name,description,price,type} = task;


const handleDelete = _id =>{


console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
 
fetch(`https://job-task-server-lemon.vercel.app/task/${_id}`,{



method: "DELETE"

})

      .then(res => res.json())
      .then(data => {

        if(data.deletedCount > 0){

   Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

 const remaining = tasks.filter(cof => cof._id !== _id)
 setTasks(remaining)


        }



      })

  }
})




}











    return (
<div className="card bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>{price}</p>
    <p>{type}</p>
    <div className="card-actions justify-end">
      <Link to={`/updatetask/${_id}`}>


      <button className="btn btn-primary">Update</button>
      </Link>
      <button 
      
      onClick={() => handleDelete(_id)}
      className="btn btn-secondary">Delete</button>
    </div>
  </div>
</div>
    );
};

export default Todo;