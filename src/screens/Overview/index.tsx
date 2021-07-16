import React from "react";
import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";

import { Container } from "./overview-styled";
import { LAUNCHES_PAST } from "../../api/queries";
import { LaunchCard } from "../../components/LaunchCard";
import { LoadingLaunches } from "../../wrappers";

interface Props {
  navigation: any;
}

const Overview: React.FC<Props> = ({ navigation }) => {
  const { loading, data } = useQuery(LAUNCHES_PAST);

  return (
    <Container>
      <LoadingLaunches loading={loading}>
        <FlatList
          data={data?.launchesPast}
          renderItem={({ item }) => (
            <LaunchCard navigation={navigation} launchData={item} />
          )}
          keyExtractor={(item) => item.mission_name}
        />
      </LoadingLaunches>
    </Container>
  );
};

export default Overview;
