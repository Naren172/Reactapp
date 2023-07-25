import React from 'react';
import ApiComponent from './components/RenterIndexComponent';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login  from './components/LoginComponent';
import OwnerComponent from './components/ownerproduct';
import ApplicantComponent from './components/Applicants';
import Navigation from './components/Navigation';
import Application from './components/Applications';
import ProductForm from './components/Addproduct';
import './App.css'

const App = () => {
  
  return (
     
      <BrowserRouter>
       <Navigation/>
        <Routes>
          
          <Route path="show" element={<ApiComponent/>} />
          <Route path="owner" element={<OwnerComponent/>} />
          <Route path="login" element={<Login/>} />
          <Route path="applications" element={<Application/>} />
          <Route path="applicants" element={<ApplicantComponent/>} />
          <Route path="addproduct" element={<ProductForm/>} />
        </Routes>
        
       
      </BrowserRouter>
     
  );
};

export default App;