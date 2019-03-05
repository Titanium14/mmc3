import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: 1
    };
  }

  render() {
    const { user } = this.props.auth;

    // const profileContent = (
    //   <>
    //     <Col />
    //     <Col lg={10}>
    //       <p className="lead text-muted">Welcome {user.name}</p>
    //       <p>You have not yet setup a profile, please add some info</p>
    //     </Col>
    //     <Col />
    //   </>
    // );
    console.log(user);

    return (
      <Row>
        <Col />
        <Col lg={3} />
        <Col lg={5} />
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
