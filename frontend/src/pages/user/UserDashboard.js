import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from './UserMenu';
import { useAuth } from '../../Context/Auth';


const UserDashboard = () => {
  const [auth]=useAuth();

  return (
    <Layout title={'User workspace !!'}>

      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
<UserMenu/>
          </div>
<div className='col-md-9'>
<div className='card w-75 p-3'>
  <h5> Name: {auth?.user?.username}</h5>
    <h5> Email: {auth?.user?.email}</h5>
  <h5> Number: {auth?.user?.phonenumber}</h5>

</div>


</div>
        </div>

      </div>
    </Layout>
  )
}

export default UserDashboard;
