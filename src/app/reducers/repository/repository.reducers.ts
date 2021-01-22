import { RepositoryDetails } from '../../model/repository';
import { Action, createReducer, on } from '@ngrx/store';
import { add } from './repository.actions';

export interface RepositoryState {
  visitedRepositories: RepositoryDetails[];
}

export const initialState: RepositoryState = {
  visitedRepositories: [],
};

const myRepositoryReducer = createReducer<RepositoryState, any>(
  initialState,
  on(add, (state, { repository }) => {

    if (state.visitedRepositories.map((rep) => rep.name).includes(repository.name)) {
      return state;
    }

    return { visitedRepositories: [...state.visitedRepositories, repository] };
  }),
);

export function repositoryReducer(state: RepositoryState | undefined, action: Action): RepositoryState {
  return myRepositoryReducer(state, action);
}
