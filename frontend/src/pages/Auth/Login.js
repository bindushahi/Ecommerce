import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout.js'
import {toast} from 'react-hot-toast';
import{useNavigate} from 'react-router-dom';
import axios from "axios";
import '../../styles/AuthStyles.css'

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate("");

    //handle submit
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});


            if (res.data.success){
                toast.success(res.data.message)
                navigate('/');
            } else{
                toast.error(res.data.message)
            }

        }catch(error){
            console.log(error)
            toast.error('something went wrong')
        }
    }
  return (
    
    <Layout title="Login -Start">
<div className='form-container'>
    <h1>Login Page</h1>
    
<form onSubmit={handleSubmit}>
  
  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1"placeholder='Enter Username'required/>
  </div>

  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" id="exampleInputPassword1"placeholder='Enter Email'required />
  </div>

  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



</div>


    </Layout>
  )
}

export default Login
