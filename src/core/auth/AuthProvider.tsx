import React, { useState } from 'react';

import { Auth, AuthContext } from './useAuth';
import { DEFAULT_USER, hasAuthUser, removeAuthUser, setAuthUser, signIn } from './authUser';

export interface AuthProviderProps {
  children?: React.ReactNode;
}

function AuthProvider({ children, ...rest }: AuthProviderProps) {
  const [authUser] = useState(DEFAULT_USER);

  const auth: Auth = {
    ...authUser,
    isSignedIn: () => {
      return hasAuthUser();
    },
    signIn: async (username: string, password: string) => {
      try {
        const user = await signIn(username, password);
        setAuthUser(user);
      } catch (err) {
        console.error(err);
      }
    },
    signOut: () => {
      removeAuthUser();
    },
  };

  return (
    <AuthContext.Provider value={auth} {...rest}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
