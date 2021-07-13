import styled from "styled-components/native";

import { Card } from "react-native-paper";

export const CardContainer = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CardCover = styled(Card.Cover)`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.md};
`;

export const CardTitle = styled(Card.Title).attrs(({ theme }) => ({
  titleStyle: { color: theme.colors.fonts.title },
  subtitleStyle: { color: theme.colors.fonts.subtitle },
}))``;
