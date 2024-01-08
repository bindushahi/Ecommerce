import React from 'react'
import AdminMenu from './AdminMenu'
import Layout from '../../components/Layout/Layout'

const UsersList = () => {
  return (
    <Layout title={"Dashboard User-list"}>
              <div className='container-fluid m-3 p-3'>

      <div className='row'>
        <div className='col-md-3'>
          <AdminMenu/>
        </div>
        <div className='col-md-9'>
                <h1>User list</h1>
</div>
        </div>
      </div>
    </Layout>
  )
}

export default UsersList
