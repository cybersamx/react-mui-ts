import React from 'react';

import AppRoutes from './AppRoutes';
import { AuthProvider } from '../core/auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
