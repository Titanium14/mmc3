import React, { Component } from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  FormFeedback
} from 'reactstrap';

class RegistrationForm extends Component {
  render() {
    return (
      <Card className="m-element-spacing">
        <CardHeader className="s-notebook-bind">
          <h2>Registration form</h2>
        </CardHeader>
        <CardBody className="s-notebook-body">
          <div className="s-vertical-lines s-vertical-reg" />
          <Form>
            <FormGroup row>
              <Input
                className="s-email-placement"
                type="email"
                name="email"
                id="email"
                placeholder="Enter new email..."
              />
              <FormFeedback className="s-error-placement">
                Incorrect email. Please enter an existing email.
              </FormFeedback>
            </FormGroup>
            <FormGroup row>
              <Input
                className="s-pass-placement"
                type="password"
                name="pass"
                id="pass"
                placeholder="Enter new password..."
              />
              <FormFeedback className="s-error-placement">
                Incorrect password. Please enter the correct password.
              </FormFeedback>
            </FormGroup>
            <FormGroup row>
              <Input
                className="s-pass-placement"
                type="password"
                name="pass"
                id="pass"
                placeholder="Confirm password..."
              />
              <FormFeedback className="s-error-placement">
                Please enter the matching password.
              </FormFeedback>
            </FormGroup>
            <FormGroup row>
              <Col md={3}>
                <Button
                  href="../Login"
                  color="link"
                  className="s-account-placement">
                  Have an account?
                </Button>
              </Col>
              <Col md={6} />
              <Col md={3}>
                <Button color="primary" className="s-submit-placement">
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default RegistrationForm;
