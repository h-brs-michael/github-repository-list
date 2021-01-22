import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { repositoryReducer, RepositoryState } from './repository/repository.reducers';

export interface AppState {
  repositoryState: RepositoryState;
}

export const reducers: ActionReducerMap<AppState> = {
  repositoryState: repositoryReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
