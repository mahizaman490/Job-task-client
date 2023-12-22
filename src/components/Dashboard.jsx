import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-blue-700 text-white">
        <ul className="menu">
          <li><NavLink to='/dashboard/addtask'>Create new tasks</NavLink></li>
          <li><NavLink to='/dashboard/alltask'>See All tasks</NavLink></li>
          <li><NavLink to='/dashboard/myProfile'>My Profile</NavLink></li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
