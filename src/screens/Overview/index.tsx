import React from "react";
import { useQuery } from "@apollo/client";
import { FlatList, Text } from "react-native";

import { Container } from "./overview-styled";
import { LAUNCHES_PAST } from "../../api/queries";
import { LaunchCard } from "../../components/LaunchCard";

const Overview: React.FC = () => {
  const { loading, error, data } = useQuery(LAUNCHES_PAST);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Container>
      <FlatList
        data={data.launchesPast}
        renderItem={({ item }) => <LaunchCard launchData={item} />}
        keyExtractor={(item) => item.mission_name}
      />
    </Container>
  );
};

export default Overview;
