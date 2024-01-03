import React from 'react';
import Layout from './../components/Layout/Layout.js';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BiMailSend } from 'react-icons/bi';

const AboutUs = () => {
  return (
    <Layout title={"About us -Eshop Team"}>
      <Container fluid className='aboutus d-flex align-items-center justify-content-center'>
        <div className='about-info text-center'>
          <h1 className='bg-dark p-2 text-white'>ABOUT US</h1>
          <p className='text-justify mt-3'>
            Welcome to EShop, your ultimate shopping destination. At EShop, we are driven by our passion to deliver top-notch products and an exceptional shopping experience for our valued customers.
          </p>

          <div className='team-section mt-4'>
            <h2 className='text-dark'>Meet Our Team</h2>
            <p className='text-justify mt-3'>
              Our dedicated team works tirelessly to ensure you receive the best shopping experience. Let's introduce you to the faces behind EShop:
            </p>
            <Row className="justify-content-center">
              <Col md={4}>
                <Card className="team-member-card">
                  <Card.Img variant="top" src="/images/team2.jpg" alt="Team Member 2" className="team-member-photo" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>Bijaya Shahi</Card.Title>
                    <Card.Text>
                      CEO ||
               <a href="mailto:bijayashahi999@gmail.com" className='mail-icon'><BiMailSend /></a>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="team-member-card">
                  <Card.Img variant="top" src="/images/team1.jpg" alt="Team Member 1" className="team-member-photo" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>Sujata Shahi</Card.Title>
                    <Card.Text>
                      Manager ||
                      <a href="mailto:sujatashahi155@gmail.com" className='mt-3 mail-icon'><BiMailSend /></a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="team-member-card">
                  <Card.Img variant="top" src="/images/team3.jpg" alt="Team Member 3" className="team-member-photo" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>Swostika Shahi</Card.Title>
                    <Card.Text>
                      Developer ||
                      <a href="mailto:swostikashahi5@gmail.com" className='mail-icon'><BiMailSend /></a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default AboutUs;
