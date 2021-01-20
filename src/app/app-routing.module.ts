import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';
import { RepositoryHistoryComponent } from './components/repository-history/repository-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: RepositoryListComponent
  },
  {
    path: 'repository/:name/:owner',
    component: RepositoryDetailsComponent
  },
  {
    path: 'history',
    component: RepositoryHistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
