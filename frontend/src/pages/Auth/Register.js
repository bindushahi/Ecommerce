import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout.js'
import {toast} from 'react-hot-toast';
import{useNavigate} from 'react-router-dom';
import axios from "axios";
import '../../styles/AuthStyles.css'

const Register = () => {
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phonenumber,setPhonenumber]=useState("");
    const[address,setAddress]=useState("");
    const navigate=useNavigate("");

    //handle submit
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{username,email,phonenumber,password,address,role:0});


            if (res.data.success){
              console.log('Success Message:',res.data.message);
                toast.success(res.data.message)
                navigate('/login');
            } else{
                toast.error(res.data.message)
            }

        }catch(error){
            console.log(error)
            toast.error('something went wrong')
        }
    }
  return (
    
    <Layout title="Register -Ecommerce App">
<div className='form-container'>
    <h1>Register Page</h1>
    
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Username</label>
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter Username'required/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1"placeholder='Enter Username'required/>
  </div>

  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" id="exampleInputPassword1"placeholder='Enter Email'required />
  </div>
  <div className="mb-3">
    <label className="form-label">Phone Number</label>
    <input type="text" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}className="form-control" id="exampleInputPhonenumber"placeholder='Enter Phone Number'required />
  </div>
   <div className="mb-3">
    <label className="form-label">Address</label>
    <input type="name"value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputAddress"placeholder='Enter Address'required />
  </div>

  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



</div>


    </Layout>
  )
}

export default Register
