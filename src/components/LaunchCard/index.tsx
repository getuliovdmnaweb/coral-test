import React from "react";
import moment from "moment";
//@ts-ignore
import image_placeholder from "../../../assets/image_placeholder.png";
import { CardContainer, CardCover, CardTitle } from "./launch-card-styled";

interface Props {
  launchData: any;
}

export const LaunchCard: React.FC<Props> = ({ launchData }) => {
  const { mission_name, launch_date_local, links } = launchData;
  const hasImageUri = !links.flickr_images[0];

  return (
    <CardContainer elevation={5}>
      <CardCover
        source={
          hasImageUri ? image_placeholder : { uri: links.flickr_images[0] }
        }
      />
      <CardTitle
        title={mission_name}
        subtitle={moment(launch_date_local).format("MM-DD-YYYY")}
      />
    </CardContainer>
  );
};
