

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Footer Logo or Text */}
        <div>
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <p className="text-gray-400">Enhancing Task Management</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            Twitter
          </a>
          <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            GitHub
          </a>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
