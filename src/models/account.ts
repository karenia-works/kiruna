export interface LoginResult {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

export interface TokenContext {
  client_id: string;
  client_secret: string;
  grant_type:
    | 'authorization_code'
    | 'client_credentials'
    | 'password'
    | 'refresh_token'
    | 'urn:ietf:params:oauth:grant-type:device_code'
    | 'hashed_password';
  scope?: string;
  redirect_uri?: string;
  username?: string;
  password?: string;
  refresh_token?: string;
  device_code?: string;
}

export interface UserAccount {
  userId: number;
  email: string;
  userName: string;
  balance: bigint;
  favoriteList: number[];
  downloadList: number[];
  follower: Follower[];
  following: Follower[];
}

export interface Follower {
  followerId: number;
  follower: UserAccount;
  followingId: number;
  following: UserAccount;
  followDate: Date;
}

export interface Purchase {
  purchaseId: number;
  userId: number;
  paperId: number;
}
