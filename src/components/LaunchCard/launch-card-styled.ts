import styled from "styled-components/native";

import { Card } from "react-native-paper";

export const CardContainer = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.lightDark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CardCover = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.bg.lightDark};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const CardTitle = styled(Card.Title).attrs(({ theme }) => ({
  titleStyle: {
    color: theme.colors.logo,
    fontSize: theme.fontSizes.body,
  },
  subtitleStyle: {
    color: theme.colors.fonts.subtitle,
    fontSize: theme.fontSizes.caption,
    fontWeight: theme.fontWeights.medium,
  },
}))``;
