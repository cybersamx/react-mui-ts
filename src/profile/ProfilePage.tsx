import { Fragment } from 'react';

import { useAuth } from '../core/auth/AuthProvider';
import NavBar from '../core/NavBar';

function ProfilePage() {
  const auth = useAuth();

  return (
    <Fragment>
      <NavBar />
      <h2>Profile</h2>
      <p>Welcome {auth.getAuthUser()?.username}</p>
    </Fragment>
  );
}

export default ProfilePage;
