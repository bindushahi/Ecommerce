import React from 'react';
import Layout from './../components/Layout/Layout.js';
import { Container, Card } from 'react-bootstrap';

const Policy = () => {
  return (
    <Layout title={"Policy -Eshop Policy"}>
      <Container fluid className='policy-container' style={{ minHeight: '60vh' }}>
        <h1 className='bg-dark p-3 text-white text-center'>POLICY</h1>

        <Card className="policy-card mb-3">
          <Card.Body>
            <Card.Title>Terms of Service</Card.Title>
            <Card.Text>
              Our Terms of Service outline the rules and regulations for the use of EShop's website. By accessing this website, we assume you accept these terms. Do not continue to use EShop if you do not agree to all of the terms stated on this page.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="policy-card mb-3">
          <Card.Body>
            <Card.Title>Refund Policy</Card.Title>
            <Card.Text>
              Our Refund Policy describes the conditions under which you may be eligible for a refund on your purchases. Please review this policy carefully before making a purchase, as it governs your rights and obligations regarding refunds.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="policy-card mb-3">
          <Card.Body>
            <Card.Title>Shipping Policy</Card.Title>
            <Card.Text>
              Our Shipping Policy outlines the details regarding the shipping and delivery of our products. This policy covers estimated delivery times, shipping costs, and other relevant information. Please review this policy before placing an order.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="policy-card mb-3">
          <Card.Body>
            <Card.Title>Privacy Policy</Card.Title>
            <Card.Text>
              Our Privacy Policy explains how we collect, use, and protect your personal information. It details the types of information we collect, the purposes for which we use it, and the measures we take to safeguard your data. Your use of our website constitutes acceptance of this policy.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}

export default Policy;
