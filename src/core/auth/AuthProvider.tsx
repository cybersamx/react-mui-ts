import { createContext, ReactNode, useContext } from 'react';

import { User } from './authModel';
import * as authService from './authService';

interface Auth {
  getAuthUser: () => User | null | undefined;
  isSignedIn: () => boolean;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children?: ReactNode;
}

const defaultAuth = {
  getAuthUser: () => null,
  isSignedIn: () => false,
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext<Auth>(defaultAuth);
const useAuth = () => useContext(AuthContext);

function AuthProvider({ children, ...rest }: AuthProviderProps) {
  let getAuthUser = () => {
    return authService.getUserFromStorage();
  };
  const isSignedIn = () => {
    return !!authService.getAuthTokenFromStorage();
  };
  const signOut = () => {
    authService.removeUserFromStorage();
    authService.removeAuthTokenFromStorage();
  };
  const signIn = async (username: string, password: string): Promise<User | null> => {
    return new Promise<User | null>(async (resolve, reject) => {
      try {
        // Get access and refresh tokens (encapsulated in an auth token object).
        const authToken = await authService.signIn(username, password);
        if (!authToken) {
          return reject(new Error('failed authentication'));
        }
        authService.setAuthTokenToStorage(authToken);

        // Get user with an access token.
        const user = await authService.getMe(authToken);
        if (!user) {
          return reject(new Error(`cannot fetch user with access token ${authToken && authToken.access_token}`));
        }
        authService.setUserToStorage(user);
        resolve(user);
      } catch (err) {
        return reject(err);
      }
    });
  };

  const auth: Auth = {
    getAuthUser,
    isSignedIn,
    signOut,
    signIn,
  };

  return (
    <AuthContext.Provider value={auth} {...rest}>
      {children}
    </AuthContext.Provider>
  );
}

export type { Auth, AuthProviderProps };
export { AuthContext, AuthProvider, useAuth };
