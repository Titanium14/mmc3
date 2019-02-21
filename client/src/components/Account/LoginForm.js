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
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Card>
        <CardHeader tag="h2">Login form</CardHeader>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup row>
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              {/* <FormFeedback className="s-error-placement">
                Incorrect email. Please enter an existing email.
              </FormFeedback> */}
            </FormGroup>
            <FormGroup row>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {/* <FormFeedback className="s-error-placement">
                Incorrect password. Please enter the correct password.
              </FormFeedback> */}
            </FormGroup>
            <FormGroup row>
              <Button color="primary" block>
                Submit
              </Button>
            </FormGroup>
            <FormGroup row>
              <Button href="../Register" color="link" block>
                Create account
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default LoginForm;
