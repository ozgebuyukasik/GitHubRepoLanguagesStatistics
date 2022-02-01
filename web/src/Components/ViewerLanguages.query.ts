import { gql } from "@apollo/client";

export default gql`
  query getCurrentUserLanguages {
    viewer {
      repositories(first: 10) {
        nodes {
          name
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;
