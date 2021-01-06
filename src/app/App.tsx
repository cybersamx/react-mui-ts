import { ThemeProvider } from '@material-ui/core';

import AppRoutes from './AppRoutes';
import { AuthProvider } from '../core/auth';
import { GlobalStyles, theme } from '../styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
