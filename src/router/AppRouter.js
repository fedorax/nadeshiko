import React from 'react';
import { Routes , Route} from 'react-router-dom';
import HomePage from '../page/home/HomePage';

const AppRouter = () => {
  return (
    <Routes >
        <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
