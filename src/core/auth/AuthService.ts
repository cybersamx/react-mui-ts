import { DEFAULT_USER, User } from './authModel';

const USER_KEY = 'user';

function getUserFromStorage(): User | null {
  const val = localStorage.getItem(USER_KEY);
  return val ? JSON.parse(val) : null;
}

function hasAuthUserInStorage(): boolean {
  return !!getUserFromStorage();
}

function removeUserFromStorage() {
  localStorage.removeItem(USER_KEY);
}

function setUserToStorage(authUser: User) {
  localStorage.setItem(USER_KEY, JSON.stringify(authUser));
}

async function signIn(username: string, password: string): Promise<User> {
  return new Promise<User>((resolve, reject) => {
    const callAPI = async () => {
      try {
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

export { getUserFromStorage, hasAuthUserInStorage, removeUserFromStorage, setUserToStorage, signIn };
