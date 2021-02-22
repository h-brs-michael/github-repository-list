import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { setContext } from '@apollo/client/link/context';

const uri = environment.githubApiUrl;

const token = '97afdfd96bea8b270c42adc4c06997c4da9b223a'; // personal github access token

const auth = setContext((operation, context) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
});

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const http = httpLink.create({ uri });

  return {
    link: ApolloLink.from([auth, http]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
}
