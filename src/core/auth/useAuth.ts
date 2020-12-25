import { createContext, useContext } from 'react';
import { AuthUser } from './authUser';

export interface Auth {
  authUser?: AuthUser;
  isSignedIn: () => boolean;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
}

const defaultAuth = {
  isSignedIn: () => false,
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext<Auth>(defaultAuth);

const useAuth = () => useContext(AuthContext);

export { AuthContext, useAuth };
