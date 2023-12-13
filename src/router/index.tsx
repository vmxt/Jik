import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BasePage from '../pages/BasePage'
import HomePage from '../pages/HomePage'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BasePage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
