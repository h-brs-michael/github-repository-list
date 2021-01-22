import { AppState } from '../index';
import { Repository, RepositoryDetails } from '../../model/repository';
import { RepositoryState } from './repository.reducers';
import { createSelector } from '@ngrx/store';

export const selectRepositoryState = (state: AppState): RepositoryState => state.repositoryState;

export const selectVisitedRepositories = createSelector<AppState, RepositoryState, ReadonlyArray<RepositoryDetails>>(
  selectRepositoryState,
  (state: RepositoryState) => state.visitedRepositories
);
