import { gql } from '@apollo/client';

const GET_PORJECTS = gql`
  query getProjects {
    projects {
      name
      id
      description
      href
      stack
      image {
        url
      }
    }
  }
`;

export default GET_PORJECTS;