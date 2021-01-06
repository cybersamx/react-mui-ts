import { Navigate, Routes, Route } from 'react-router-dom';

import { SignInPage, SignUpPage } from '../auth';
import { AuthRoute } from '../core/auth';
import { DashboardPage } from '../dashboard';
import { HomePage } from '../home';
import { AppLayout } from '../layouts';
import { NotFoundPage } from '../status';
import { ProfilePage, ProfileEditPage } from '../profile';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
      <AuthRoute element={<AppLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="profile">
          <Route path="/" element={<ProfilePage />} />
          <Route path="edit" element={<ProfileEditPage />} />
        </Route>
      </AuthRoute>
    </Routes>
  );
}

export default AppRoutes;
