// src/components/Navbar.js

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-lg">Task Manager</div>
          <div className="flex space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">Tasks</a>
            <a href="#" className="text-white">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
