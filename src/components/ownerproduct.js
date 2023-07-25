import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance';
import ApplicantComponent from './Applicants';
const OwnerComponent=()=>{
    const [applicant, setApplicant]=useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        if(localStorage.getItem("accessToken")) {
          fetchDataFromRailsApi();
        }
      }, []);
    const handleClick= async (arg)=>{
        try{
            const res = await axiosInstance.get('/view/'+arg);
           
            const {renter}=res.data;
            console.log(res.data)
            console.log(renter);
            setApplicant(renter);
           
          }catch{
            console.log("error while fetching");
          }
    }
    const remove= async (arg)=>{
        try{
            const res = await axiosInstance.delete('/products/'+arg);
            alert("Removed Successfull!")
            console.log(res.data)
           
          }catch{
            console.log("error while fetching");
          }
    }
    
    const fetchDataFromRailsApi = async () => {
    try {
        const response = await axiosInstance.get('/products');

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

}


    if(data){
        return (
        
          <div>
           
            <ul>
              {data.map((item) => (
                <div key={item.id}>
                <p>Name: {item.name}</p>
                <p>Rent: {item.rent}</p>
                {item.avatar_url && <img src={item.avatar_url} alt="Los Angeles" />}
                <p><button onClick={() => handleClick(item.id)}>View Applicants</button></p>
                <p><button onClick={() => remove(item.id)}>Remove Product</button></p>
              </div>
              
              
              ))}
            </ul>
            <ApplicantComponent prop={applicant}/>
          </div>
         
        );}
        else{
        return (
        
          <div>
           
            <p>you are not authorized to view this age</p>
          </div>
         
        );}
}
export default OwnerComponent;