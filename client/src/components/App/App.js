import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Budget from '../Budget/Budget';
// import Profile from '../Profile/Profile';
import Account from '../Account/Account';
import NavBar from '../Utils/NavBar';
import LoadingSpinner from '../Utils/LoadingSpinner';
import Footer from '../Utils/Footer';

class App extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default App;
