import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './redux/actions/shared';
import Home from './views/Home';
import LeaderBoard from './views/LeaderBoard';
import QuestionDetail from './views/QuestionDetail';
import Header from './components/Header';
import AddQuestion from './components/AddQuestion';
import ProtectedRoute from './components/ProtectedRoute';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import Intro from './components/Intro';

import PATHS from './data/CONSTANTS';

import Theme from './theme/Theme';


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
              <Route exact path={PATHS.LOGIN} component={Login} />
              <Route exact path={PATHS.ROOT} component={Intro} />
              <ProtectedRoute exact path={PATHS.HOME} component={Home} />
              <ProtectedRoute path={`${PATHS.QUESTION}/:id`} component={QuestionDetail} />
              <ProtectedRoute exact path={PATHS.ADD} component={AddQuestion} />
              <ProtectedRoute exact path={PATHS.LEADERBOARD} component={LeaderBoard} />
              <Route path='*' component={PageNotFound} />
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
