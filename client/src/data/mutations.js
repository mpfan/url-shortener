import { gql } from "@apollo/client";

const createShortUrl = gql`
  mutation($longUrl: String!) {
    createUrl(url: { longUrl: $longUrl }) {
      shortUrl
    }
  }
`;

export { createShortUrl };
