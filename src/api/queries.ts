import { gql } from "@apollo/client";

export const LAUNCHES_PAST = gql`
  {
    launchesPast(limit: 10, sort: "launch_date_local", order: "desc") {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;
