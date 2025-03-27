import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 mb-2">
          © {currentYear} Academic Papers Collection. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://github.com/your-username/academic-papers-collection" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 