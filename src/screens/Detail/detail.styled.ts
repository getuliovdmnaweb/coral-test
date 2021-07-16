import styled from "styled-components/native";

import { Avatar, Card, Paragraph, Title, IconButton } from "react-native-paper";

export const Container = styled.ScrollView`
  padding-right: ${({ theme }) => theme.spacing.lg};
  padding-left: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bg.primary};
 
`;

export const DetailCard = styled(Card)`
  margin-top:${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.bg.lightDark};
  margin-bottom:${({ theme }) => theme.spacing.md};
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
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Link = styled(Title)`
  color: white;
  font-size:  ${({ theme }) => theme.fontSizes.caption}px;
`

export const RocketIcon = styled(Avatar.Icon)`
  background-color: ${({ theme }) => theme.colors.logo};
`;

export const Separator = styled.View`
  height:  ${({theme})=> theme.images.sm};
  width:  ${({theme})=> theme.spacing.md};;
`
export const LaunchImage = styled.Image`
  height: ${({theme})=> theme.images.sm};
  width: ${({theme})=> theme.images.sm};
`

export const ImageIcon = styled(IconButton).attrs(({theme}) => ({
  color: theme.colors.logo
}))`
  position: absolute;
  alignSelf: flex-end;
`