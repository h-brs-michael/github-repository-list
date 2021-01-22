import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { repositoryReducer, RepositoryState } from './repository/repository.reducers';
import { searchQueryReducer, SearchQueryState } from './searchQuery/search-query.reducers';

export interface AppState {
  repositoryState: RepositoryState;
  searchQueryState: SearchQueryState;
}

export const reducers: ActionReducerMap<AppState> = {
  repositoryState: repositoryReducer,
  searchQueryState: searchQueryReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
