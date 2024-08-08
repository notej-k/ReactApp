import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Coding Test App</div>
        <div className="flex space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/orders" className="text-gray-300 hover:text-white">
            Orders
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;