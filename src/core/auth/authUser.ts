export interface AuthUser {
  username: string;
  accessToken: string;
}

const AUTH_USER_KEY = 'auth-user';
const DEFAULT_USER: AuthUser = {
  username: 'cybersam',
  accessToken: 'RandomToken',
};

function getAuthUser(): AuthUser | null {
  const val = localStorage.getItem(AUTH_USER_KEY);
  return val ? JSON.parse(val) : null;
}

function hasAuthUser(): boolean {
  return !!getAuthUser();
}

function removeAuthUser() {
  localStorage.removeItem(AUTH_USER_KEY);
}

function setAuthUser(authUser: AuthUser) {
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authUser));
}

async function signIn(username: string, password: string): Promise<AuthUser> {
  return new Promise<AuthUser>((resolve, reject) => {
    const callAPI = async () => {
      try {
        console.log('signIn', username, password);
        // Just do a simple username/password challenge.
        if (username !== 'sam' || password !== 'password') {
          return reject(new Error('invalid credentials'));
        }

        // Persist the token and user locally.
        const user = DEFAULT_USER;

        resolve(user);
      } catch (err) {
        return reject(err);
      }
    };

    callAPI();
  });
}

export { DEFAULT_USER, getAuthUser, hasAuthUser, removeAuthUser, setAuthUser, signIn };
