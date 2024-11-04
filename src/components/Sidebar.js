// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 h-full p-4">
      <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2">
        <span className="text-blue-500">Algo</span>
        <span className="text-purple-600">Zenith</span>
      </h2>
      <ul>
        <li className="mb-4 font-medium flex items-center space-x-2">
          <span>🏠</span> <span>Dashboard</span>
        </li>
        <li className="mb-4 font-medium flex items-center space-x-2">
          <span>💡</span> <span>Learn</span>
        </li>
        <li className="mb-4 font-medium flex items-center space-x-2">
          <span>👥</span> <span>Forums</span>
        </li>
        <li className="mb-4 font-medium flex items-center space-x-2 bg-blue-100 p-2 rounded">
          <span>🛠️</span> <span>Upskill</span>
        </li>
        <li className="mb-4 font-medium flex items-center space-x-2">
          <span>📊</span> <span>Contest</span>
        </li>
        <li className="mb-4 font-medium flex items-center space-x-2">
          <span>⭐</span> <span>Leaderboard</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
