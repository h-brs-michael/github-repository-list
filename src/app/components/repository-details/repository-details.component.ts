import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { RepositoryDetails } from '../../model/repository';
import { Store } from '@ngrx/store';
import { add } from '../../reducers/repository/repository.actions';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnInit {

  paramMap$: Observable<ParamMap>;
  repositoryDetails$: Observable<RepositoryDetails>;

  error: Error;

  constructor(private activatedRoute: ActivatedRoute,
              private repositoryService: RepositoryService,
              private store: Store) {
  }

  ngOnInit(): void {

    this.paramMap$ = this.activatedRoute.paramMap;

    this.repositoryDetails$ = this.paramMap$
      .pipe(
        tap((parameterMap) => {
          console.log(`observable: owner: ${parameterMap.get('owner')} , name: ${parameterMap.get('name')}.`);
        }),
        mergeMap(parameterMap => {
          return this.repositoryService.getRepositoryDetails(parameterMap.get('name'), parameterMap.get('owner'))
            .pipe(
              catchError(error => {
                this.error = error;
                return throwError(error);
              }),
              tap(repository => this.store.dispatch(add({ repository })))
            );
        })
      );
  }

}
