import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import AddQuestion from './components/AddQuestion';
import Question from './components/Question';
import LeaderBoard from './components/LeaderBoard';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Header />
        <Route exact path='/' component={Login} />
        <Route path="/home" component={Home} />
        <Route path='/question:id' component={Question} />
        <Route path='/add' component={AddQuestion} />
        <Route path='/leaderboard' component={LeaderBoard} />
      </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}


export default connect(mapStateToProps)(App);
