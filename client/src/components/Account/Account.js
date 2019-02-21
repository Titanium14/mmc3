import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import '../../styles/Account.css';

import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountFlag: 'login'
    };
  }

  onFormSwitch() {}

  render() {
    return (
      <Row>
        <Col />
        <Col lg={4}>
          {this.state.accountFlag === 'login' ? (
            <LoginForm />
          ) : (
            <RegistrationForm />
          )}
        </Col>
        <Col />
      </Row>
    );
  }
}

export default Account;
