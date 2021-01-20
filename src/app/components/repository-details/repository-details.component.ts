import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RepositoryDetails } from '../../model/repository';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnInit {

  repositoryDetails$: Observable<RepositoryDetails>;
  error;

  repositoryName;
  repositoryOwner;

  constructor(private activatedRoute: ActivatedRoute,
              private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    this.repositoryName = paramMap.get('name');
    this.repositoryOwner = paramMap.get('owner');

    this.repositoryDetails$ = this.repositoryService.getRepositoryDetails(this.repositoryName, this.repositoryOwner)
      .pipe(
        catchError(error => {
          this.error = error;
          return throwError(error);
        }),
        tap(result => console.log(result))
      );
  }

}
