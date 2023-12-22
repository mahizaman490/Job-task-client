// src/components/Navbar.js

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => Swal.fire("Your logout is successful!"))
      .catch(error => console.error(error));
  }




  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-lg">Task Manager</div>
          <div className="flex space-x-4">
            <Link to='/' className="text-white">Home</Link>
            {/* <Link to='/login' className="text-white">Login</Link> */}
            <div className="navbar-end ml-auto">
        {user ? (
          <>
            {/* <div className="avatar online">
              <div className="w-8 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </div>
            <span><small>{user.displayName}</small></span> */}
            <a onClick={handleLogOut} className="btn btn-sm bg-blue-400">Logout</a>
          </>
        ) : (
          <Link to='/login'>
            <button className="btn btn-sm ">Login</button>
          </Link>
        )}
      </div>
            <Link to='/dashboard' className="text-white">Dashboard</Link>
            <Link to='/contact' className="text-white">Contact</Link>
            {/* <Link to='/dashboard' className="text-white">Dashboard</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
