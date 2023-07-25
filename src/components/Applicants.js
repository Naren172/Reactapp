import React from 'react';
import axiosInstance from './axiosInstance';

const ApplicantComponent=(props)=>{
    const accept= async (arg1,arg2)=>{
        try{
          const res = await axiosInstance.get('/accept/'+arg1+','+arg2);
          console.log(res.data)
          alert("Accepted")
        }catch{
          console.log("error while applying")
        }
     }
     const reject= async (arg1,arg2)=>{
        try{
          const res = await axiosInstance.get('/reject/'+arg1+','+arg2);
          console.log(res.data)
          alert("Rejected")
        }catch{
          console.log("error while applying")
        }
     }
    return(
        <div>
             <ul>
                    {props.prop.map((item)=>(
                        <div key={item.id}>
                            <p>Name:{item.name}</p>
                            <p><button onClick={() => accept(item.id,item.product_id)}>Accept</button></p>
                            <p><button onClick={() => reject(item.id,item.product_id)}>Reject</button></p>
                        </div>
                    ))}

                </ul>
            
        </div>
    )
};
export default ApplicantComponent;