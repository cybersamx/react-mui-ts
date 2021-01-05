import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import AppRoutes from './AppRoutes';
import { AuthProvider } from '../core/auth/AuthProvider';
import GlobalStyles from '../styles/GlobalStyles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#eeeeee',
      paper: '#cccccc',
    },
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#6a6f9f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7a98b3',
    },
  },
});

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
