// src/components/Navbar.js

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-lg">Task Manager</div>
          <div className="flex space-x-4">
            <Link to='/' className="text-white">Home</Link>
            <Link to='/login' className="text-white">Login</Link>
            <Link to='/' className="text-white">Logout</Link>
            <Link to='/dashboard' className="text-white">Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
