import React from 'react';

import AppRoutes from './AppRoutes';
import AuthProvider from '../core/auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
