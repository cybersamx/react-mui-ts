import axios, { AxiosRequestConfig } from 'axios';

import { AuthToken, User } from './authModel';

// A REACT_APP_API_URL value can be injected by webpack during build.
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://my-json-server.typicode.com/';
const USER_KEY = 'user';
const AUTH_TOKEN_KEY = 'authToken';

const config: AxiosRequestConfig = {
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: (data, headers) => {
    console.log('request', data, headers);
    return JSON.stringify(data);
  },
  transformResponse: (data, headers) => {
    console.log('response', data, headers);
    return data;
  },
};

function getUserFromStorage(): User | null {
  const val = localStorage.getItem(USER_KEY);
  return val ? JSON.parse(val) : null;
}

function hasUserInStorage(): boolean {
  return !!getUserFromStorage();
}

function removeUserFromStorage() {
  localStorage.removeItem(USER_KEY);
}

function setUserToStorage(user: User) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function getAuthTokenFromStorage(): AuthToken | null {
  const val = localStorage.getItem(AUTH_TOKEN_KEY);
  return val ? JSON.parse(val) : null;
}

function hasAuthTokenInStorage(): boolean {
  return !!getUserFromStorage();
}

function removeAuthTokenFromStorage() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

function setAuthTokenToStorage(authToken: AuthToken) {
  localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(authToken));
}

async function signIn(username: string, password: string): Promise<AuthToken | null> {
  return new Promise<AuthToken | null>((resolve, reject) => {
    const callAPI = async () => {
      try {
        // Since we are using a fake API server that serves static content. We need to perform a simple
        // username/password challenge here.
        if (username !== 'sam' || password !== 'password') {
          return reject(new Error('invalid credentials'));
        }

        // Call API.
        const url = new URL(API_BASE_URL);
        url.pathname = 'cybersamx/react-mui-ts/auth';
        const cfg = { ...config };
        const res = await axios.get<AuthToken>(url.toString(), cfg);
        const authToken = res.data;

        resolve(authToken);
      } catch (err) {
        return reject(err);
      }
    };

    callAPI();
  });
}

async function getMe(authToken: AuthToken): Promise<User | null> {
  return new Promise<User | null>((resolve, reject) => {
    const calledPAI = async () => {
      try {
        const url = new URL(API_BASE_URL);
        url.pathname = 'cybersamx/react-mui-ts/profile';

        if (!authToken.access_token) {
          return reject('null access token');
        }
        const cfg = { ...config };
        cfg.headers.Authorization = `Bearer ${authToken.access_token}`;
        const res = await axios.get<User>(url.toString(), cfg);
        const user = res.data;

        resolve(user);
      } catch (err) {
        return reject(err);
      }
    };

    calledPAI();
  });
}

export {
  getMe,
  getUserFromStorage,
  hasUserInStorage,
  removeUserFromStorage,
  getAuthTokenFromStorage,
  hasAuthTokenInStorage,
  removeAuthTokenFromStorage,
  setUserToStorage,
  setAuthTokenToStorage,
  signIn,
};
