import React from 'react'
import Layout from '../../components/Layout/Layout.js'

const Register = () => {
  return (
    <Layout title="Register -Ecommerce App">

<div className='register'>
    <h1>Register Page</h1>
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputName" placeholder='Enter Username'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1"placeholder='Enter Username'/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"placeholder='Enter Email' />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPhonenumber" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="exampleInputPhonenumber"placeholder='Enter Phone Number' />
  </div>
   <div className="mb-3">
    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
    <input type="name" className="form-control" id="exampleInputAddress"placeholder='Enter Address' />
  </div>

  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



</div>


    </Layout>
  )
}

export default Register
