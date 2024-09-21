import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { strapiBaseUrl } from "./config";

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${strapiBaseUrl}/graphql`,
  }),
  cache: new InMemoryCache(),
});

export default client;
