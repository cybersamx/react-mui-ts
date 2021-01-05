import { useAuth } from '../core/auth/AuthProvider';
import { Page } from '../layouts';
import NavBar from '../core/NavBar';

function DashboardPage() {
  const auth = useAuth();

  return (
    <Page title="Dashboard">
      <NavBar />
      <h2>Dashboard</h2>
      <p>Welcome {auth.getAuthUser()?.username}</p>
    </Page>
  );
}

export default DashboardPage;
