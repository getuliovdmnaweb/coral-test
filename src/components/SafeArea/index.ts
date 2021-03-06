import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding-top: ${StatusBar.currentHeight}px;
`;
