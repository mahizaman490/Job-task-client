import { useLoaderData } from "react-router-dom";
import Todo from "./Todo";
import { useState } from "react";

const AllTask = () => {
  const loadedTasks = useLoaderData();
  const [tasks,setTasks] = useState(loadedTasks)

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-8 md:text-6xl text-center font-semibold bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 text-transparent bg-clip-text">
        ALL Tasks Here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadedTasks .map((task) => (
          <Todo key={task._id} task={task}
          
          tasks={tasks}
          setTasks={setTasks}
          
          
          ></Todo>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
