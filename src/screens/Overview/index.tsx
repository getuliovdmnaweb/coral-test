import React from "react";
import { useQuery } from "@apollo/client";
import { Text, View } from "react-native";

import { LAUNCHES_PAST } from "../../api/queries";

const Overview: React.FC = () => {
  const { loading, error, data } = useQuery(LAUNCHES_PAST);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  console.log(data);

  return (
    <View>
      <Text>Overview Screen</Text>
    </View>
  );
};

export default Overview;
