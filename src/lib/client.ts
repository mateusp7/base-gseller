import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

import { createUploadLink } from "apollo-upload-client";
import { getCookie } from "./storage";

const authLink = setContext((_, { headers }) => {
  const token = getCookie("vendure.token");
  const channelToken = getCookie("channel.token");

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
      "vendure-token": channelToken ?? "",
    },
  };
});

const cache = new InMemoryCache();
const link = createUploadLink({
  uri: `${process.env.NEXT_PUBLIC_URL}/admin-api?languageCode=pt_BR`,
});

export const client = new ApolloClient({
  link: authLink.concat(link as unknown as ApolloLink),
  cache,
});
