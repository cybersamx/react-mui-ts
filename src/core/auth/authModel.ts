interface User {
  id: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
}

interface AuthToken {
  access_token?: string;
  expire?: number;
  profile_id?: string;
}

export type { AuthToken, User };
