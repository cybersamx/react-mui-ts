import { useAuth } from '../core/auth/AuthProvider';
import { Page } from '../layouts';
import NavBar from '../core/NavBar';

function ProfilePage() {
  const auth = useAuth();

  return (
    <Page title="Profile">
      <NavBar />
      <h2>Profile</h2>
      <p>Welcome {auth.getAuthUser()?.username}</p>
    </Page>
  );
}

export default ProfilePage;
