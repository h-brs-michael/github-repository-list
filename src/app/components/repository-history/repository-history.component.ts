import { Component, OnInit } from '@angular/core';
import { RepositoryState } from '../../reducers/repository/repository.reducers';
import { Store } from '@ngrx/store';
import { selectVisitedRepositories } from '../../reducers/repository/repository.selector';
import { RepositoryDetails } from '../../model/repository';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repository-history',
  templateUrl: './repository-history.component.html',
  styleUrls: ['./repository-history.component.scss']
})
export class RepositoryHistoryComponent implements OnInit {

  visitedRepositories$: Observable<ReadonlyArray<RepositoryDetails>>;

  constructor(private store: Store<{ repositoryState: RepositoryState }>) {
  }

  ngOnInit(): void {
    this.visitedRepositories$ = this.store.select(selectVisitedRepositories);
  }

}
