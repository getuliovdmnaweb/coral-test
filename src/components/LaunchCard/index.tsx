import React from "react";
import { TouchableOpacity } from "react-native";
import moment from "moment";
//@ts-ignore
import image_placeholder from "../../../assets/image_placeholder.png";
import { CardContainer, CardCover, CardTitle } from "./launch-card-styled";
import { LaunchData } from "../../types/launchData";

interface Props {
  launchData: LaunchData;
  navigation: any;
}

export const LaunchCard: React.FC<Props> = ({ launchData, navigation }) => {
  const { mission_name, launch_date_local, links } = launchData;
  const hasImageUri = !links.flickr_images[0];

  return (
    <CardContainer elevation={5}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Launch Detail", { launchData });
        }}
      >
        <CardCover
          source={
            hasImageUri ? image_placeholder : { uri: links.flickr_images[0] }
          }
        />
      </TouchableOpacity>
      <CardTitle
        title={mission_name}
        subtitle={moment(launch_date_local).format("MM-DD-YYYY")}
      />
    </CardContainer>
  );
};
