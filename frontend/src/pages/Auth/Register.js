import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout.js'
import { toast } from 'react-toastify';

const Register = () => {
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phonenumber,setPhonenumber]=useState("");
    const[address,setAddress]=useState("");


    //handle submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(username,email,password,phonenumber,address)
        toast.success("yeyyyyy success")
    }

  return (
    
    <Layout title="Register -Ecommerce App">
<div className='register'>
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
    <input type="number" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}className="form-control" id="exampleInputPhonenumber"placeholder='Enter Phone Number'required />
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
