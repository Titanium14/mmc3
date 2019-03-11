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
import { connect } from 'react-redux';

import './Dashboard.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: 1
    };
  }

  render() {
    const { user } = this.props.auth;
    console.log(user);

    return (
      <Row>
        <Col />
        <Col lg={3}>
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center">
                {user.name}
              </CardTitle>
              <CardImg className="m-img-center s-change-size" src={user.avatar} alt="User avatar" />
              <ButtonGroup className="m-element-block-display" size="sm" vertical>
                <Button>My Budget</Button>
                <Button>My Games</Button>
                <Button>About Me</Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Col>
        <Col lg={5}>
          <Card>
            <CardBody>A</CardBody>
          </Card>
        </Col>
        <Col />
      </Row>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Profile);
