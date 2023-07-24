import React from 'react';
import ApiComponent from './components/RenterIndexComponent';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login  from './components/LoginComponent';
import Navigation from './components/Navigation';
import './App.css'

const App = () => {
  
  return (
     
      <BrowserRouter>
       <Navigation/>
        <Routes>
          
          <Route path="show" element={<ApiComponent/>} />
          <Route path="login" element={<Login/>} />
        </Routes>
        
       
      </BrowserRouter>
     
  );
};

export default App;