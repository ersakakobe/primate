import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-900">Primate</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
              <li><Link to="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;