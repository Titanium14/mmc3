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
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../Utils/actions/authActions';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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

    this.props.registerUser(newUser, this.props.history);
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
          <Button href="#signup" onClick={this.props.switchForm} color="link" block>
            Have an account?
          </Button>
        </CardBody>
      </Card>
    );
  }
}

RegistrationForm.propTypes = {
  switchForm: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(RegistrationForm));
