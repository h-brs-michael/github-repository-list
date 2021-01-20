import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryHistoryComponent } from './components/repository-history/repository-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RepositoryListComponent,
    RepositoryDetailsComponent,
    RepositoryHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
