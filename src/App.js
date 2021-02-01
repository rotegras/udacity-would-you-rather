import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleInitialData from './actions/shared';
import './App.css';
import Home from './components/Home';

class App extends Component {

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}


export default connect()(App);
