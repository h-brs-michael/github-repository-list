import { Component, OnInit } from '@angular/core';
import { Repository } from '../../model/repository';
import { RepositoryService } from '../../services/repository.service';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, first, map, mergeMap, startWith, switchMap, tap } from 'rxjs/operators';
import { merge } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SearchQueryState } from '../../reducers/searchQuery/search-query.reducers';
import { selectSearchQuery } from '../../reducers/searchQuery/search-query.selector';
import { set } from '../../reducers/searchQuery/search-query.actions';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  repositories$: Observable<Repository[]>;
  error: Error;

  searchControl = new FormControl();

  constructor(private repositoryService: RepositoryService,
              private store: Store<{ searchQueryState: SearchQueryState }>) {
  }

  ngOnInit(): void {

    const storeQuery$: Observable<string> = this.store.select(selectSearchQuery).pipe(
      first(),
      tap(storeQuery => console.log('query from store: ', storeQuery)),
      tap(storeQuery => this.searchControl.setValue(storeQuery)),
    );

    const formQuery$: Observable<string> = this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(formQuery => console.log('query from form: ', formQuery))
    );

    const mergedQuery$: Observable<string> = merge(storeQuery$, formQuery$).pipe(
      tap(mergedQuery => console.log('merged query: ', mergedQuery)),
    );

    this.repositories$ = mergedQuery$.pipe(
      tap(value => this.store.dispatch(set({ searchQuery: value }))),
      tap(result => console.log('set store query to:', result)),
      switchMap(value => this.repositoryService.searchPublicRepositories(value)),
      catchError(error => {
        this.error = error;
        return throwError(error);
      }),
    );
  }

}
