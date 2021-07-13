import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const SafeArea = styled.SafeAreaView`
  padding-top: ${StatusBar.currentHeight}px;
`;
