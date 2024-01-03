import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: 'lavender', minHeight: '80vh', padding: '20px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
