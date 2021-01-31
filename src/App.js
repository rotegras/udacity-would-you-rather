import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleInitialData from './actions/shared';
import './App.css';

class App extends Component {

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        Would you rather app
      </div>
    );
  }
}


export default connect()(App);
