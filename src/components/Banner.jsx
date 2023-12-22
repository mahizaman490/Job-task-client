import { Link } from "react-router-dom";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: 'url("https://i.ibb.co/FwrJNTm/project-team-mgmt-banner.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',  
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  
  };

  return (
    <div style={bannerStyle} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
        <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-gray-300 mb-6">Enhance and improve your task management</p>
        <Link to='/login'>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">Let's Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
