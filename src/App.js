import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './redux/actions/shared';
import Home from './views/Home';
import LeaderBoard from './views/LeaderBoard';
import Login from './views/Login';
import QuestionView from './views/QuestionView';
import Header from './components/Header';
import AddQuestion from './components/AddQuestion';
import ProtectedRoute from './components/ProtectedRoute';
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
              <Route exact path={PATHS.LOGIN} component={Login} />
              <ProtectedRoute path={PATHS.HOME} component={Home} />
              <ProtectedRoute path={`${PATHS.QUESTION}:id`} component={QuestionView} />
              <ProtectedRoute path={PATHS.ADD} component={AddQuestion} />
              <ProtectedRoute path={PATHS.LEADERBOARD} component={LeaderBoard} />
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
