import { Navigate, Routes, Route } from 'react-router-dom';

import { SignInPage, SignUpPage } from '../auth';
import AuthRoute from '../core/auth/AuthRoute';
import DashboardPage from '../dashboard/DashboardPage';
import HomePage from '../home/HomePage';
import NotFoundPage from '../status/NotFoundPage';
import { ProfilePage, ProfileEditPage } from '../profile';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
      <AuthRoute>
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
