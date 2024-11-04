// src/components/ChapterList.js
import React from 'react';

const ChapterList = () => {
  return (
    <div className="p-4 w-64 border-r">
      <h3 className="font-semibold mb-4">Chapters</h3>
      <ul>
        {['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'].map((chapter, idx) => (
          <li key={idx} className="flex justify-between items-center mb-4 p-2 hover:bg-gray-200 rounded">
            <span>{chapter}</span>
            <span>05:00:00</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
