import React from 'react';
import { 
     BrowserRouter,
     Routes,
     Route
} from 'react-router-dom';

import Login from './Login';
import HomePage from './HomePage';
import DashBoard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path='HomePage' element={<HomePage />}/> 
          <Route path='Dashboard' element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;