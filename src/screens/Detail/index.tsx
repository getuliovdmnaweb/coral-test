import React, { useContext } from "react";
import moment from "moment";
import { Card } from "react-native-paper";
import { FlatList, View } from "react-native";

import {
  CardTitle,
  Container,
  ContentParagraph,
  ContentTitle,
  DetailCard,
  Link,
  RocketIcon,
  Separator,
  LaunchImage,
  ImageIcon,
} from "./detail.styled";
import { LaunchContext } from "../../context/LaunchContext";

interface Props {
  route: any;
}

const Detail: React.FC<Props> = ({ route }) => {
  const { launchData } = route.params;

  const { hasUri, toggleFavouriteImages } = useContext(LaunchContext);

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
          <ContentTitle>Launch Images</ContentTitle>
          <FlatList
            data={launchData.links.flickr_images.slice(0, 3)}
            horizontal
            ItemSeparatorComponent={() => <Separator />}
            renderItem={({ item }) => (
              <View>
                <LaunchImage source={{ uri: item }} />
                <ImageIcon
                  onPress={() => toggleFavouriteImages(item)}
                  icon={hasUri(item) ? "star" : "star-outline"}
                />
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </Card.Content>
      </DetailCard>

      <ContentTitle>Article Link</ContentTitle>
      <Link>{launchData.links.article_link}</Link>
    </Container>
  );
};

export default Detail;
