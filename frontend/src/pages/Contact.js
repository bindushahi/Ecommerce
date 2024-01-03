import React from 'react';
import Layout from './../components/Layout/Layout.js';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className='row contactus'>
        <div className='col-md-6 px-0'>
          <img src="/images/contactus.jpg" alt="Contact Us" style={{ width: "100%", height: "80vh", objectFit: "cover" }} />
        </div>
        <div className='col-md-6 contact-info text-center'>
          <h1 className='bg-dark p-3 text-white'>CONTACT US</h1>
          <p className='text-justify mt-3'>
            We're here to assist you! Thank you for choosing EShop. Whether you have questions, feedback, or need assistance, our team is here to help. Feel free to reach out using the following contact options:
          </p>
          <div className='contact-details'>
            <p className='mt-3'>
              <BiMailSend /> <span>Email:</span> www.help@eshop.com
            </p>
            <p className='mt-3'>
              <BiPhoneCall /> <span>Phone:</span> +977-9876004488
            </p>
            <p className='mt-3 help-icon'>
              <BiSupport style={{ animation: 'bounce 1s infinite alternate' }} /> <span>Toll-Free:</span> 084-2334343
            </p>
          </div>
          <p className='text-justify mt-4'>
            Stay connected with EShop for the latest updates, promotions, and more!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
