import { User } from './user';

export interface Repository {
  name: string;
  owner: User;
}

export interface RepositoryDetails {
  name: string;
  description: string;
  owner: User;
  assignableUsers: User[];
}
