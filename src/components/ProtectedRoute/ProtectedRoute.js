import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


function ProtectedRoute({component: Component, authedUser, ...props}) {

  return (
    <Route
      {...props}
      render={(props) => (
        authedUser
          ? <Component {...props} />
          : <Redirect to='/login' />
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
