
const Banner = () => {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" >Welcome to Task Manager</h1>
            <p className="text-gray-600 mb-6">Enhance and improve your task management</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Let's Explore</button>
          </div>
        </div>
      );
};

export default Banner;