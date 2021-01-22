import { createAction, props } from '@ngrx/store';

export enum SearchQueryActionTypes {
  SET = '[Repository Component] Set SearchQuery'
}

interface SetSearchQueryProps {
  searchQuery: string;
}

export const set = createAction<SearchQueryActionTypes, SetSearchQueryProps>(SearchQueryActionTypes.SET, props<SetSearchQueryProps>());
