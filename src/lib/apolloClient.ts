import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function createApolloClient(initialState = {}, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: process.env.GRAPHQL_ENDPOINT, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
