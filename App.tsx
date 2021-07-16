import React from "react";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { client } from "./src/api";
import { SafeArea } from "./src/components/SafeArea";
import { theme } from "./src/theme";
import { ThemeProvider } from "./src/theme/styled-components";
import { MainNavigator } from "./src/navigator";
import { LaunchProvider } from "./src/context/LaunchContext";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <SafeArea>
            <ApolloProvider client={client}>
              <LaunchProvider>
                <MainNavigator />
              </LaunchProvider>
            </ApolloProvider>
          </SafeArea>
        </ThemeProvider>
      </NavigationContainer>

      <ExpoStatusBar style="dark" />
    </>
  );
}
