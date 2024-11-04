// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <h1 className="text-xl font-semibold">Upskill - Learning Materials</h1>
      <div className="flex items-center space-x-6">
        <button className="font-medium">Mentor Sessions</button>
        <button className="font-medium border-b-2 border-blue-500 pb-1">Learning Material</button>
        <div className="flex items-center space-x-4">
          <span>Home</span>
          <button className="p-2 rounded-full bg-gray-200">
            <i className="fas fa-bell"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
