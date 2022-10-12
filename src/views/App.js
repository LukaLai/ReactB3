import React from 'react';
import { 
     BrowserRouter,
     Routes,
     Route
} from 'react-router-dom';

import Login from '../views/Login';
import HomePage from '../views/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path='HomePage' element={<HomePage />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;