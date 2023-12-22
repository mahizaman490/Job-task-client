import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" >Welcome to Task Manager</h1>
            <p className="text-gray-600 mb-6">Enhance and improve your task management</p>
    <Link to='/login'>

    <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Lets Explore</button>
    </Link>
          </div>
        </div>
      );
};

export default Banner;