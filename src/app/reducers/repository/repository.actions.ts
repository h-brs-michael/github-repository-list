import { createAction, props } from '@ngrx/store';
import { RepositoryDetails } from '../../model/repository';

export enum RepositoryActions {
  ADD = '[Repository Component] Add Repository'
}

interface AddRepositoryProps {
  repository: RepositoryDetails;
}

export const add = createAction<RepositoryActions, AddRepositoryProps>(RepositoryActions.ADD, props<AddRepositoryProps>());
