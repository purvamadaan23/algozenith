// src/components/ContentPanel.js
import React from 'react';

const ContentPanel = () => {
  return (
    <div className="flex-1 p-4">
      <h3 className="font-semibold mb-4">Part 1 - Learning Courses</h3>
      <div className="mb-4">
        <div className="flex justify-between">
          <span>Video 1</span>
          <span>10:00</span>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <span>Article 1</span>
          <span>10:00</span>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <span>Quiz 1</span>
          <span>10:00</span>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <span>Coding Exercise 1</span>
          <span>10:00</span>
        </div>
      </div>
    </div>
  );
};

export default ContentPanel;
