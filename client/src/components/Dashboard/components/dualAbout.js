import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  ButtonGroup,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

import TextFieldGroup from '../../utils/textFieldGroup';

class DualAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayContent: '',
      switch: 'Enabled'
    };

    this.onDetailsClick = this.onDetailsClick.bind(this);
    this.textSpeech = this.textSpeech.bind(this);
    this.inputFieldChange = this.inputFieldChange.bind(this);
  }

  onDetailsClick(e) {
    const target = e.target;
    const name = target.name;

    this.setState({ displayContent: name });
  }

  textSpeech() {
    if (this.state.switch === 'Enabled') this.setState({ switch: 'Disabled' });
    if (this.state.switch === 'Disabled') this.setState({ switch: 'Enabled' });
  }

  inputFieldChange() {
    // console.log('hi');
  }

  render() {
    return (
      <>
        <Col md={4}>
          <div className={this.props.winWidth < 782 ? 's-card-padding' : ''}>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={6}>
                    <CardTitle tag="h3">About Me</CardTitle>
                    <ButtonGroup
                      className="m-element-block-display s-btn-spacing"
                      size="sm"
                      vertical>
                      <Button
                        name="name"
                        onClick={this.onDetailsClick}
                        color="primary">
                        My Name
                      </Button>
                      <Button
                        name="email"
                        onClick={this.onDetailsClick}
                        color="primary">
                        My Email
                      </Button>
                      <Button
                        name="password"
                        onClick={this.onDetailsClick}
                        color="primary">
                        My Password
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col lg={6}>
                    <CardImg
                      className="m-img-center"
                      src={this.props.user.avatar}
                      alt="User avatar"
                    />
                  </Col>
                </Row>
                <Row className="m-element-spacing-top">
                  <Col lg={6}>
                    <CardTitle tag="h3">Colour blindness</CardTitle>
                    <ButtonGroup
                      className="m-element-block-display s-btn-spacing"
                      size="sm"
                      vertical>
                      <Button color="primary">Red-Green</Button>
                      <Button color="primary">Blue-Yellow</Button>
                      <Button color="primary">Totally Colourblind</Button>
                      <Button color="primary">Not Colourblind</Button>
                    </ButtonGroup>
                  </Col>
                  <Col lg={6}>
                    <CardTitle tag="h3" className="text-center">
                      Text-to-Speech
                    </CardTitle>
                    <ButtonGroup
                      className="m-element-block-display"
                      size="sm"
                      vertical>
                      <Button onClick={this.textSpeech} color="primary">
                        {this.state.switch}
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <ButtonGroup
                  className="m-element-block-display s-btns-design"
                  size="sm"
                  vertical>
                  <Button onClick={this.props.onBack} color="primary">
                    Back
                  </Button>
                </ButtonGroup>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col
          md={6}
          className={this.props.winWidth < 782 ? 'm-element-spacing-top' : ''}>
          <div className={this.props.winWidth < 782 ? 's-card-padding' : ''}>
            <Card>
              <CardBody>
                {this.state.displayContent === 'email' ? (
                  <>
                    <CardTitle tag="h3" className="text-center">
                      What's your email?
                    </CardTitle>
                    <hr />
                    <TextFieldGroup
                      classes="s-btns-design"
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      value={this.props.user.email}
                      onChange={this.inputFieldChange}
                    />
                  </>
                ) : this.state.displayContent === 'password' ? (
                  <>
                    <CardTitle tag="h3" className="text-center">
                      Change your password
                    </CardTitle>
                    <hr />
                    <TextFieldGroup
                      classes="s-btns-design"
                      placeholder="Current password"
                      name="password"
                      type="password"
                      value=""
                      onChange={this.inputFieldChange}
                    />
                    <TextFieldGroup
                      classes="s-btns-design"
                      placeholder="Confirm password"
                      name="password2"
                      type="password"
                      value=""
                      onChange={this.inputFieldChange}
                    />
                  </>
                ) : (
                  <>
                    <CardTitle tag="h3" className="text-center">
                      Who are you?
                    </CardTitle>
                    <hr />
                    <TextFieldGroup
                      classes="s-btns-design"
                      placeholder="Name"
                      name="name"
                      type="text"
                      value={this.props.user.name}
                      onChange={this.inputFieldChange}
                    />
                  </>
                )}
              </CardBody>
            </Card>
          </div>
        </Col>
      </>
    );
  }
}

DualAbout.propTypes = {
  onBack: PropTypes.func.isRequired
};

export default DualAbout;
