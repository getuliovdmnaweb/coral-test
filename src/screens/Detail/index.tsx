import React from "react";
import moment from "moment";
import { Card } from "react-native-paper";

import {
  CardTitle,
  Container,
  ContentParagraph,
  ContentTitle,
  DetailCard,
  RocketIcon,
} from "./detail.styled";

interface Props {
  route: any;
}

const Detail: React.FC<Props> = ({ route }) => {
  const { launchData } = route.params;

  return (
    <Container>
      <DetailCard elevation={3}>
        <CardTitle
          title={launchData.rocket.rocket_name}
          subtitle={moment(launchData.launch_date_local).format("MM-DD-YYYY")}
          left={(props: any) => <RocketIcon {...props} icon="rocket" />}
        />
        <Card.Content>
          <ContentTitle>{launchData.mission_name}</ContentTitle>
          <ContentParagraph>{launchData.details}</ContentParagraph>
        </Card.Content>
      </DetailCard>
    </Container>
  );
};

export default Detail;
