import { gql } from "@apollo/client";

export const LAUNCHES_PAST = gql`
  query LaunchesPast {
    launchesPast(limit: 10) {
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