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

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
    // .catch(err => console.log(err.response.data));
  }

  render() {
    const { errors } = this.state;

    return (
      <Card>
        <CardHeader className="text-center" tag="h2">
          Sign In
        </CardHeader>
        <CardBody>
          <Form noValidate onSubmit={this.onSubmit}>
            <FormGroup row>
              <Input
                type="text"
                className={errors.name ? 'is-invalid' : ''}
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>
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
              <Input
                type="password"
                className={errors.password2 ? 'is-invalid' : ''}
                placeholder="Confirm password"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
              <FormFeedback>{errors.password2}</FormFeedback>
            </FormGroup>
            <FormGroup row>
              <Button color="primary" block>
                Submit
              </Button>
            </FormGroup>
          </Form>
          <Button onClick={this.props.switchForm} color="link" block>
            Have an account?
          </Button>
        </CardBody>
      </Card>
    );
  }
}

RegistrationForm.propTypes = {
  switchForm: PropTypes.func.isRequired
};

export default RegistrationForm;
