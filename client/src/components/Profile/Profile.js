import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../redux/actions/profileActions';

// import './profile.css';

// import ProfilePic from './components/ProfilePic';
// import ProfileDetails from './components/ProfileDetails';
// import ProfileButtons from './components/ProfileButtons';
// import SubNav from './components/SubNav';
import LoadingSpinner from '../utils/LoadingSpinner';

class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let profileContent;

    if (profile === null || loading) {
      profileContent = <LoadingSpinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        profileContent = <h4>TODO: DISPLAY PROFILE</h4>;
      } else {
        // User is logged in but has no profile
        profileContent = (
          <>
            <Col />
            <Col lg={10}>
              <p className="lead text-muted">Welcome {user.name}</p>
              <p>You have not yet setup a profile, please add some info</p>
              <Link to="/create-profile" className="btn btn-lg btn-info">
                Create Profile
              </Link>
            </Col>
            <Col />
          </>
        );
      }
    }

    return (
      <>
        <Row>{profileContent}</Row>
      </>
    );
  }
}

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Profile);
