import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Helmet from 'react-helmet';
import  { Toaster } from 'react-hot-toast';

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
      <div style={{ backgroundColor: 'lavender', minHeight: '82vh', padding: '2px' }}>
        <Toaster/>

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
