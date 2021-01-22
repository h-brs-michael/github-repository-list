import { AppState } from '../index';
import { SearchQueryState } from './search-query.reducers';
import { createSelector } from '@ngrx/store';

export const selectSearchQueryState = (state: AppState): SearchQueryState => state.searchQueryState;

export const selectSearchQuery = createSelector<AppState, SearchQueryState, string>(
  selectSearchQueryState,
  (state: SearchQueryState) => state.searchQuery
);
