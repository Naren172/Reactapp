import React, { useState, useEffect }  from 'react';
import axiosInstance from './axiosInstance';
const Application=()=>{
    const [data, setData] = useState([]);
    useEffect(() => {
        if(localStorage.getItem("accessToken")) {
          fetchDataFromRailsApi();
        }
    }, []);
    const handleClick= async (arg)=>{
        try{
          const res = await axiosInstance.delete('/delete/'+arg);
          console.log(res.data)
          alert("Deleted")
        }catch{
          console.log("error while applying")
        }
     }
    const fetchDataFromRailsApi = async () => {
        try {
         const response = await axiosInstance.get('/applications');
   
         if(response.data){
         setData(response.data);
         
         }
         if(!response){
           setData({message: "You are not authorized to view this page"})
         }
       } catch (error) {
         console.error('Error fetching user data:', error);
       }
    }

    return (
  
        <div style={{ display: 'grid', gridGap: '20px' }}>
         
          <ul style={{display: 'flex', flexDirection: 'column'}}>
            {data.map((item) => (
                 <div class="row">
                 <div class="col-md-6" style={{top:'20%'}}>
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                <p>Name:{item.name}</p>
                <p>Rent:{item.rent}</p>
                {item.url && <img style={{width:'50%',height:'50%'}} src={item.url} alt="Los Angeles" />}
                <p>Status: {item.status}</p>
                </div></div>
                <p><button onClick={() => handleClick(item.id)}>Delete</button></p>
            </div>
            ))}
          </ul>
        </div>
       
      );
};
export default Application;