import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../Home/Home';
import Budget from '../Budget/Budget';
// import Profile from '../Profile/Profile';
import Account from '../Account/Account';

import NavBar from '../Utils/NavBar';
import LoadingSpinner from '../Utils/LoadingSpinner';
import Footer from '../Utils/Footer';
import Store from '../Utils/store';

class App extends Component {
  render() {
    return (
      <Provider store={ Store }>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Budget" component={Budget} />
            {/* <Route exact path='/Profile' component={Profile} /> */}
            <Route exact path="/Account" component={Account} />
            <Route render={() => <LoadingSpinner />} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    );
  }
}

export default App;
