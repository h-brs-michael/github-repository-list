import { Injectable } from '@angular/core';
import { Repository, RepositoryDetails } from '../model/repository';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_REPOSITORIES_QUERY, GET_REPOSITORY_DETAILS_QUERY } from './queries';
import { User } from '../model/user';

interface RepositoryResult {
  search: {
    nodes: Repository[]
  };
}

interface RepositoryDetailsResult {
  repository: {
    name: string;
    description: string;
    owner: User
    assignableUsers: {
      nodes: User[];
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {


  constructor(private apollo: Apollo) {
  }

  searchPublicRepositories(queryString: string): Observable<Repository[]> {

    return this.apollo
      .watchQuery<RepositoryResult>({
        query: GET_REPOSITORIES_QUERY,
        variables: {
          query: queryString + ' in:name',
        }
      })
      .valueChanges
      .pipe(
        map((response) => response?.data?.search?.nodes)
      );
  }

  getRepositoryDetails(name: string, owner: string): Observable<RepositoryDetails> {

    return this.apollo
      .watchQuery<RepositoryDetailsResult>({
        query: GET_REPOSITORY_DETAILS_QUERY,
        variables: {
          repName: name,
          repOwner: owner
        }
      })
      .valueChanges
      .pipe(
        map(response => response?.data?.repository),
        map(response => ({ ...response, assignableUsers: response?.assignableUsers?.nodes })),
      );
  }

}
