// src/components/Upskill.js
import React from 'react';
import ChapterList from './ChapterList';
import ContentPanel from './ContentPanel';

const Upskill = () => {
  return (
    <div className="flex">
      <ChapterList />
      <ContentPanel />
    </div>
  );
};

export default Upskill;
