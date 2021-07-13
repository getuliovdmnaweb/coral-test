import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApolloProvider } from "@apollo/client";

import { client } from "./src/api";
import { OverviewScreen } from "./src/screens";

export default function App() {
  return (
    <View style={styles.container}>
      <ApolloProvider client={client}>
        <OverviewScreen />
      </ApolloProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
