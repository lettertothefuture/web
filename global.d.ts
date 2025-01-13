import 'react-jss';

declare module 'react-jss' {
  interface Theme {
    textPrimary: string;
    textSecondary: string;
    red: string;
    redWithTransparency: string;
    redFocus: string;
    redHover: string;
    whiteBackground: string;
    paper: string;
  }
}
