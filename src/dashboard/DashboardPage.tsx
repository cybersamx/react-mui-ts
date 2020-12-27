import { Fragment } from 'react';

import { useAuth } from '../core/auth/AuthContext';
import NavBar from '../core/NavBar';

function DashboardPage() {
  const auth = useAuth();

  return (
    <Fragment>
      <NavBar />
      <h2>Dashboard</h2>
      <p>Welcome {auth.getAuthUser()?.username}</p>
    </Fragment>
  );
}

export default DashboardPage;
