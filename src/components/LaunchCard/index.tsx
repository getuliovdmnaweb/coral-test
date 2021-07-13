import React from "react";
import { CardContainer, CardCover, CardTitle } from "./launch-card-styled";

interface Props {
  launchData: any;
}

export const LaunchCard: React.FC<Props> = ({ launchData }) => {
  return (
    <CardContainer elevation={5}>
      <CardCover source={{ uri: launchData.links.flickr_images[0] }} />
      <CardTitle
        title={launchData.mission_name}
        subtitle={launchData.launch_date_local}
      />
    </CardContainer>
  );
};
