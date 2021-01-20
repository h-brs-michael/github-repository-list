import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Repository } from '../../model/repository';
import { RepositoryService } from '../../services/repository.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  search$: Observable<string>;
  repositories$: Observable<Repository[]>;
  error: Error;

  initValue = 'start';
  searchControl = new FormControl(this.initValue);

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {

    // todo: add laoding on new search value
    this.search$ = this.searchControl.valueChanges
      .pipe(
        startWith(this.initValue),
        tap(value => console.log('input search: ', value)),
        debounceTime(200),
        distinctUntilChanged(),
        tap(value => console.log('result search: ', value))
      );

    // todo: add error
    this.repositories$ = this.search$.pipe(
      switchMap(value => this.repositoryService.searchPublicRepositories(value)),
      tap(result => console.log(result))
    );
  }

}
