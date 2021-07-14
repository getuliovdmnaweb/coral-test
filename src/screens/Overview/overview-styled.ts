import { Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.bg.primary,
  size: isAndroid ? 64 : "large",
}))``;
