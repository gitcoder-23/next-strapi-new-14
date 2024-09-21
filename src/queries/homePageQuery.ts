import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
  query {
    homePage {
      description
      documentId
      title
      updatedAt
      publishedAt
      createdAt
    }
  }
`;
