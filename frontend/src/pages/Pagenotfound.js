import React from 'react'
import {Link} from 'react-router-dom';
import Layout from './../components/Layout/Layout.js'

const Pagenotfound = () => {
  return (
    <Layout title={"Go back ! -Page not found"}>
      <div className='pnf'>
        <h1 className='pnf-title'>404</h1>
      <h2>OOPS !!Page not found</h2>
      <Link to='/' className='pnf-btn'>Go Back !</Link>

      </div>
    </Layout>
  )
}

export default Pagenotfound;
