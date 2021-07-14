import styled from "styled-components/native";

import { Avatar, Card, Paragraph, Title } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const DetailCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.bg.lightDark};
`;

export const CardTitle = styled(Card.Title).attrs(({ theme }) => ({
  titleStyle: {
    fontSize: theme.fontSizes.h5,
    color: theme.colors.logo,
    fontWeight: theme.fontWeights.medium,
  },
  subtitleStyle: {
    fontSize: theme.fontSizes.caption,
    color: theme.colors.bg.paper,
    fontWeight: theme.fontWeights.medium,
  },
}))`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ContentTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.logo};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ContentParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.bg.paper};
  font-size: ${({ theme }) => theme.fontSizes.caption}px;
  font-weight: normal;
  text-align: justify;
`;

export const RocketIcon = styled(Avatar.Icon)`
  background-color: ${({ theme }) => theme.colors.logo};
`;
