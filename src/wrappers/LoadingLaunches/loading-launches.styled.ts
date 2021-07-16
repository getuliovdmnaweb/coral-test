import { Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.logo,
  size: isAndroid ? 64 : "large",
}))``;
