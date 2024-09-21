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

export const GET_HOME_PAGE_BANNER = gql`
  query {
    homePage {
      bannerBlock {
        ... on ComponentLayoutHeroBanner {
          bannerImage {
            url
            name
          }
          downloadLink {
            resume {
              url
            }
            text
            isExternal
            id
            url
          }
          heading
          subHeading
          id
        }
      }
      documentId
      description
      createdAt
      title
    }
  }
`;
