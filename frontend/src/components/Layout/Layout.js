import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Helmet from 'react-helmet';
 import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8'/>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
        <meta name='author' content={author}/>

        <title>{title}</title>
      </Helmet>
      <Header />
      <div style={{ backgroundColor: 'lavender', minHeight: '80vh', padding: '20px' }}>
        <ToastContainer/>

        {children}
      </div>
      <Footer />
    </div>
  );
};
Layout.defaultProps={
  title:'EShop -Shop Now',
  description:'Mern Stack Ecommerce Project',
  keywords:'mern,react,node,mongodb,ecommerce,online shop',
  author:'Bindu Shahi',
};

export default Layout;
