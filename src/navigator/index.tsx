import * as React from "react";

import { Stack, StyledNavigator } from "./main-navigator.styled";
import { OverviewScreen } from "../screens";

export const MainNavigator = () => {
  return (
    <StyledNavigator>
      <Stack.Screen name="Launches" component={OverviewScreen} />
    </StyledNavigator>
  );
};
