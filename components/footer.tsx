import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-gray-800 text-center">
      <ul className="flex justify-center space-x-6 mb-4">
        <li>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Press
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Guidelines
          </a>
        </li>
      </ul>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#">
          <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="#">
          <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
        </a>
        <a href="#">
          <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
        </a>
      </div>
      <p className="text-gray-500">&copy; 2023 Pupify</p>{' '}
    </footer>
  );
};

export default Footer;
