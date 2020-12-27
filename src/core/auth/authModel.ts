interface User {
  username: string;
  accessToken: string;
}

// Anyone who signs in successfully will be given this identity.
const DEFAULT_USER: User = {
  username: 'cybersam',
  accessToken: 'RandomToken',
};

const NULL_USER: User = {
  username: '',
  accessToken: '',
};

export type { User };
export { DEFAULT_USER, NULL_USER };
