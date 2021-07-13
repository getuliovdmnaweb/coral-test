import React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "./src/api";
import { OverviewScreen } from "./src/screens";
import { SafeArea } from "./src/components/SafeArea";

export default function App() {
  return (
    <SafeArea>
      <ApolloProvider client={client}>
        <OverviewScreen />
      </ApolloProvider>
    </SafeArea>
  );
}
