import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      logo: string;
      bg: {
        primary: string;
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
  }
}
