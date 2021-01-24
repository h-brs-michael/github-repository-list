import { gql } from 'apollo-angular';

export const GET_REPOSITORY_DETAILS_QUERY = gql`
  query repository($repName: String!, $repOwner: String!) {
    repository(name: $repName, owner: $repOwner) {
      name
      description
      owner {
        login
        avatarUrl
      }
      assignableUsers(first: 20) {
        nodes {
          ... on User {
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
      nodes {
        ... on Repository {
          name
          owner {
            login
            avatarUrl
          }
        }
      }
    }
  }
`;
