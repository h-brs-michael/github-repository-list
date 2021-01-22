import { Action, createReducer, on } from '@ngrx/store';
import { set } from './search-query.actions';

export interface SearchQueryState {
  searchQuery: string;
}

export const initialState: SearchQueryState = {
  searchQuery: 'start',
};

const myRepositoryReducer = createReducer<SearchQueryState, any>(
  initialState,
  on(set, (state, { searchQuery }) => ({searchQuery})),
);

export function searchQueryReducer(state: SearchQueryState | undefined, action: Action): SearchQueryState {
  return myRepositoryReducer(state, action);
}
