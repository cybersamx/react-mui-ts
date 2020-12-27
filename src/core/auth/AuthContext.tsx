import React, { createContext, useCallback, useContext, useState } from 'react';

import { NULL_USER, User } from './authModel';
import * as AuthService from './AuthService';

export interface Auth {
  getAuthUser: () => User | null | undefined;
  isSignedIn: () => boolean;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
}

export interface AuthProviderProps {
  children?: React.ReactNode;
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
  const [user, setUser] = useState<User | null>();

  let getAuthUser = useCallback(() => user, [user]);
  const isSignedIn = () => !!user;
  const signOut = () => {
    AuthService.removeUserFromStorage();
    setUser(null);
  };
  const signIn = async (username: string, password: string): Promise<User | null> => {
    return new Promise<User | null>(async (resolve, reject) => {
      try {
        const user = await AuthService.signIn(username, password);
        setUser(user);
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

export { AuthContext, AuthProvider, useAuth };
