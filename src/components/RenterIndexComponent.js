import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance';

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if(localStorage.getItem("accessToken")) {
      fetchDataFromRailsApi();
    }
  }, []);



  const fetchDataFromRailsApi = async () => {
     try {
      const response = await axiosInstance.get('/renter');
      console.log(response.data)
      if(response.data){
      const {products}=response.data
      setData(products);
      }
      if(!response){
        setData({message: "You are not authorized to view this page"})
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
      
  };
  return (
  
    <div>
     
      <ul>
        {data.map((item) => (
          <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Email: {item.rent}</p>
          {item.avatar_url && <img src={item.avatar_url} alt={`Avatar for ${item.name}`} />}
        </div>
        ))}
      </ul>
    </div>
   
  );
};

export default ApiComponent;