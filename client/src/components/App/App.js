import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../redux/utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../../redux/actions/authActions';

import './App.css';

import Home from '../Home/Home';
import Budget from '../Budget/Budget';
import Results from '../Results/Results';
import Dashboard from '../Dashboard/Dashboard';
import Auth from '../Auth/Auth';

import NavBar from './components/NavBar';
import LoadingSpinner from '../utils/LoadingSpinner';
import Footer from './components/Footer';

import store from '../../redux/store';

import PrivateRoute from '../utils/PrivateRoute';

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
    // Redirect to login
    window.location.href = '/Auth/login';
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0
    };

    this.resizeHandler = this.resizing.bind(this);

    // This event listener is monitoring the size of the window.
    window.addEventListener('resize', this.resizeHandler);
  }

  resizing() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.resizing();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizing);
  }
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <NavBar />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home winWidth={this.state.width} />}
              />
              <Route
                exact
                path="/Budget"
                render={() => <Budget winWidth={this.state.width} />}
              />
              <Route
                exact
                path="/Results"
                render={() => <Results winWidth={this.state.width} />}
              />
              <PrivateRoute
                exact
                path="/Dashboard"
                component={Dashboard}
                winWidth={this.state.width}
              />
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
