import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  FormFeedback
} from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);

    axios
      .post('/api/users/login', user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <Card>
        <CardHeader className="text-center" tag="h2">
          Log In
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup row>
              <Input
                type="email"
                className={errors.email ? 'is-invalid' : ''}
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup row>
              <Input
                type="password"
                className={errors.password ? 'is-invalid' : ''}
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>
            <FormGroup row>
              <Button color="primary" block>
                Submit
              </Button>
            </FormGroup>
          </Form>
          <Button href="#signup" onClick={this.props.switchForm} color="link" block>
            Create account
          </Button>
        </CardBody>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  switchForm: PropTypes.func.isRequired
};

export default LoginForm;
