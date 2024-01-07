import React from 'react';
import Layout from './../components/Layout/Layout.js';
import { useAuth } from '../Context/Auth.js';



const HomePage = () => {
  const[auth,setAuth]=useAuth()
  return (
    <Layout title={"Get It !!!"}>
      <h1>Home Page</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>

    </Layout>
  )
}

export default HomePage;
