import React from "react";
import { useQuery } from "@apollo/client";
import { FlatList, Text } from "react-native";

import { Container, Loading } from "./overview-styled";
import { LAUNCHES_PAST } from "../../api/queries";
import { LaunchCard } from "../../components/LaunchCard";

const Overview: React.FC = () => {
  const { loading, data } = useQuery(LAUNCHES_PAST);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data.launchesPast}
          renderItem={({ item }) => <LaunchCard launchData={item} />}
          keyExtractor={(item) => item.mission_name}
        />
      )}
    </Container>
  );
};

export default Overview;
