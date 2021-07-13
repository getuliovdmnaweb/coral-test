import React from "react";
import { ApolloProvider } from "@apollo/client";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { client } from "./src/api";
import { OverviewScreen } from "./src/screens";
import { SafeArea } from "./src/components/SafeArea";
import { theme } from "./src/theme";
import { ThemeProvider } from "./src/theme/styled-components";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <ApolloProvider client={client}>
            <OverviewScreen />
          </ApolloProvider>
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
