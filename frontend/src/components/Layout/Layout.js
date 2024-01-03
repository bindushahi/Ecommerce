import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Helmet from 'react-helmet'

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>My Title</title>
      </Helmet>
      <Header />
      <div style={{ backgroundColor: 'lavender', minHeight: '80vh', padding: '20px' }}>
        {children}

      </div>
      <Footer />
    </div>
  );
}

export default Layout;
