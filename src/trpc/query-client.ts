import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";

import superJSON from "superjson";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        serializeData: superJSON.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: superJSON.deserialize,
      },
    },
  });
}
