import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/profile.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfilePic from './ProfilePic';
import ProfileDetails from './ProfileDetails';
import ProfileButtons from './ProfileButtons';
import SubNav from './SubNav';

const Profile = props => {
  return (
    <Container fluid className="m-grid-container">
      <Row>
        <Col md="12">
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col md="2" />
        <Col md="2">
          <ProfilePic />
        </Col>
        <Col md="4">
          <ProfileDetails />
        </Col>
        <Col md="2">
          <ProfileButtons />
        </Col>
        <Col md="2" />
      </Row>
      <Row>
        <Col md="2" />
        <Col md="8">
          <SubNav />
        </Col>
        <Col md="2" />
      </Row>
      <Row>
        <Col md="12">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
