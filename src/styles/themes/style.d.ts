import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      primary: string;
      secondary: string;
      backgroundVariant: string;
      transparentBackground: string;
      boxShadow: string;
      primaryVariant: string;
      backgroundGradient: string;
    };
  }
}
