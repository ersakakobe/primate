import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-4 text-center text-gray-600">
        © {new Date().getFullYear()} Primate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;