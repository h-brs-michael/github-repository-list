export interface User {
  login: string;
  name?: string;
  avatarUrl?: string;
}

export interface Repository {
  name: string;
  owner: User;
}

export interface RepositoryDetails {
  name: string;
  assignableUsers: User[];
}
