import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import handleInitialData from './actions/shared';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path='/' component={Login} />
          <Route path="/home">
            <Home />
          </Route>
      </Router>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}


export default connect()(App);
