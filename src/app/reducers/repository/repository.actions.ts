import { createAction, props } from '@ngrx/store';
import { RepositoryDetails } from '../../model/repository';

export enum RepositoryActionTypes {
  ADD = '[Repository Component] Add Repository'
}

interface AddRepositoryProps {
  repository: RepositoryDetails;
}

export const add = createAction<RepositoryActionTypes, AddRepositoryProps>(RepositoryActionTypes.ADD, props<AddRepositoryProps>());
