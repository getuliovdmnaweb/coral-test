import React from "react";
import { useQuery } from "@apollo/client";
import { Text } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

import { Container } from "./overview-styled";
import { LAUNCHES_PAST } from "../../api/queries";

const Overview: React.FC = () => {
  const { loading, error, data } = useQuery(LAUNCHES_PAST);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  console.log(data);

  return (
    <Container>
      <Card elevation={5}>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default Overview;
