import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PATHS from '../../data/CONSTANTS';


function ProtectedRoute({component: Component, authedUser, ...props}) {

  return (
    <Route
      {...props}
      render={(props) => (
        authedUser
          ? <Component {...props} />
          : <Redirect to={PATHS.LOGIN} />)}
    />
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser: authedUser.id
  }
}

ProtectedRoute.propTypes = {
  component: PropTypes.node,
  authedUser: PropTypes.string,
}


export default connect(mapStateToProps)(ProtectedRoute);
