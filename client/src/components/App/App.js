import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../redux/utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../../redux/actions/authActions';

import './App.css';

import Home from '../Home/Home';
import Budget from '../Budget/Budget';
// import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';

import NavBar from './components/NavBar';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

import store from '../../redux/store';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth off
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current profile
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Budget" component={Budget} />
              {/* <Route exact path='/Profile' component={Profile} /> */}
              <Route exact path="/Auth/login" component={Auth} />
              <Route exact path="/Auth/register" component={Auth} />
              <Route render={() => <LoadingSpinner />} />
            </Switch>
            <Footer />
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
