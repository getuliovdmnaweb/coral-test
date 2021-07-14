import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      logo: string;
      bg: {
        primary: string;
        dark: string;
        lightDark: string;
        paper: string;
      };
      fonts: {
        title: string;
        subtitle: string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeights: {
      regular: string;
      medium: string;
      bold: string;
    };
    fontSizes: {
      caption: number;
      button: number;
      body: number;
      title: number;
      h5: number;
      h4: number;
      h3: number;
      h2: number;
      h1: number;
    };
  }
}
