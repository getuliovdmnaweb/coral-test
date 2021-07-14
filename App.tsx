import React from "react";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { client } from "./src/api";
import { SafeArea } from "./src/components/SafeArea";
import { theme } from "./src/theme";
import { ThemeProvider } from "./src/theme/styled-components";
import { MainNavigator } from "./src/navigator";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <SafeArea>
            <ApolloProvider client={client}>
              <MainNavigator />
            </ApolloProvider>
          </SafeArea>
        </ThemeProvider>
      </NavigationContainer>

      <ExpoStatusBar style="dark" />
    </>
  );
}
