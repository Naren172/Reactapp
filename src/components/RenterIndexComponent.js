import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance';

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if(localStorage.getItem("accessToken")) {
      fetchDataFromRailsApi();
    }
  }, []);
  
 const handleClick= async (arg)=>{
    try{
      const res = await axiosInstance.get('/apply/'+arg);
      console.log(res.data)
      alert("Applied")
    }catch{
      console.log("error while applying")
    }
 }

  const fetchDataFromRailsApi = async () => {
     try {
      const response = await axiosInstance.get('/renter');

      if(response.data){
      const {products}=response.data
      setData(products);
      console.log(products)
      }
      if(!response){
        setData({message: "You are not authorized to view this page"})
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
      
  };
  if(data){
  return (
  
    <div>
     
      <ul>
        {data.map((item) => (
          <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Rent: {item.rent}</p>
          {item.avatar_url && <img src={item.avatar_url} alt="Los Angeles" />}
          <p><button onClick={() => handleClick(item.id)}>Apply</button></p>
          <p></p>
          <br/>
        </div>
        
        
        ))}
      </ul>
    </div>
   
  );}
  else{
  return (
  
    <div>
     
      <p>you are not authorized to view this age</p>
    </div>
   
  );}
};

export default ApiComponent;