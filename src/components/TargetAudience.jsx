// src/components/TargetAudience.js


import { faCode, faBriefcase, faPiggyBank, faPalette, faGraduationCap, faLightbulb, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TargetAudience = () => {
  const targetAudiences = [
    {
      id: 1,
      title: 'Developers',
      description: 'Streamline your project management and collaborate with your team effortlessly.',
      icon: faCode,
    },
    {
      id: 2,
      title: 'Corporate Professionals',
      description: 'Enhance productivity and stay organized with our intuitive task management tools.',
      icon: faBriefcase,
    },
    {
      id: 3,
      title: 'Bankers',
      description: 'Efficiently manage tasks and deadlines to ensure smooth financial operations.',
      icon: faPiggyBank,
    },
    {
      id: 4,
      title: 'Designers',
      description: 'Organize your design projects and collaborate seamlessly with your team.',
      icon: faPalette,
    },
    {
      id: 5,
      title: 'Students',
      description: 'Stay on top of your coursework and collaborate with classmates effectively.',
      icon: faGraduationCap,
    },
    {
      id: 6,
      title: 'Entrepreneurs',
      description: 'Manage your startup tasks and projects efficiently for business success.',
      icon: faLightbulb,
    },
    {
      id: 7,
      title: 'Marketing Professionals',
      description: 'Coordinate marketing campaigns and track progress with our task management tools.',
      icon: faChartBar,
    },
  
  ];

  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Who Can Benefit?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Target Audience Cards */}
          {targetAudiences.map((audience) => (
            <div key={audience.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center" data-aos="zoom-in">
              <FontAwesomeIcon icon={audience.icon} className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
