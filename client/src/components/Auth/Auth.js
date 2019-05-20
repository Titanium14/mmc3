import React from 'react';
import { Row, Col } from 'reactstrap';

import './Auth.css';

import Login from './components/login';
import Register from './components/register';

const Auth = props => {
  return (
    <Row className="m-element-spacing-top" noGutters>
      <Col />
      <Col md={4} sm={6} xs={8}>
        {props.location.pathname === '/Auth/login' ? <Login /> : <Register />}
      </Col>
      <Col />
    </Row>
  );
};

export default Auth;
