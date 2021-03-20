import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login';


function ProtectedRoute({component: Component, authedUser, ...props}) {
  return (
    <Route
      {...props}
      render={(props) => (
        authedUser
          ? <Component {...props} />
          : <Login />
      )}
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
