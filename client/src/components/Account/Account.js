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

  onFormSwitch() {
    this.state.accountFlag === 'login'
      ? this.setState({ accountFlag: 'register' })
      : this.setState({ accountFlag: 'login' });
  }

  render() {
    return (
      <Row>
        <Col />
        <Col lg={4}>
          {this.state.accountFlag === 'login' ? (
            <LoginForm switchForm={this.onFormSwitch.bind(this)} />
          ) : (
            <RegistrationForm switchForm={this.onFormSwitch.bind(this)} />
          )}
        </Col>
        <Col />
      </Row>
    );
  }
}

export default Account;
