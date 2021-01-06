import { createContext, ReactNode, useContext } from 'react';

import { NULL_USER, User } from './authModel';
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
  getAuthUser: () => NULL_USER,
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
    return !!authService.getUserFromStorage();
  };
  const signOut = () => {
    authService.removeUserFromStorage();
  };
  const signIn = async (username: string, password: string): Promise<User | null> => {
    return new Promise<User | null>(async (resolve, reject) => {
      try {
        const user = await authService.signIn(username, password);
        console.log('signIn');
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
