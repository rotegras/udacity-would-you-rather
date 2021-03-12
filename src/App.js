import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './redux/actions/shared';
import Home from './views/Home';
import LeaderBoard from './views/LeaderBoard';
import Login from './views/Login';
import Question from './views/QuestionView';
import Header from './components/Header';
import AddQuestion from './components/AddQuestion';

import Theme from './theme/Theme';

sessionStorage.clear();

function App ({...props}) {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);


  return (
      <Theme>
        <div className="App">
          <Router >
            <Header />
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/home" component={Home} />
              <Route path='/question:id' component={Question} />
              <Route path='/add' component={AddQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
            </Switch>
          </Router>
        </div>
      </Theme>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser.id,
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}


export default connect(mapStateToProps)(App);
