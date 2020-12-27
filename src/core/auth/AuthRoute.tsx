import React from 'react';
import { Route, RouteProps, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

import { useAuth } from './AuthContext';

function AuthRoute({ children, element, ...rest }: RouteProps) {
  const auth = useAuth();
  const { pathname } = useLocation();

  if (auth.isSignedIn()) {
    return (
      <Route element={element} {...rest}>
        {children}
      </Route>
    );
  }

  return <Navigate to={`/signin?redirect=${encodeURIComponent(pathname)}`} replace />;
}

export default AuthRoute;
