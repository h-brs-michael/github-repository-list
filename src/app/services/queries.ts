import { gql } from 'apollo-angular';

export const GET_REPOSITORY_DETAILS_QUERY = gql`
  query repository($repName: String!, $repOwner: String!) {
    repository(name: $repName, owner: $repOwner) {
      __typename
      name
      assignableUsers(first: 20) {
        __typename
        nodes {
          ... on User {
            __typename
            name
            login
            avatarUrl
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORIES_QUERY = gql`
  query search($query: String!) {
    search(first: 20, query: $query, type: REPOSITORY) {
      __typename
      repositoryCount
      nodes {
        ... on Repository {
          __typename
          name
          owner {
            __typename
            login
            avatarUrl
          }
        }
      }
    }
  }
`;
