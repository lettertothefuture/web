import { DefaultTheme } from 'react-jss';

export const Theme = {
  textPrimary: 'rgb(91, 91, 91)',
  textSecondary: 'rgb(120, 120, 120)',
  red: '#B23A48',
  redWithTransparency: 'rgba(143, 46, 62, 0.8)',
  redFocus: '#A83244',
  redHover: '#8F2E3E',
  whiteBackground: '-webkit-linear-gradient(top, #fff, #fff)',
  paper: `-webkit-linear-gradient(left, rgba(255,85,91, .1), rgba(255,85,91, .1)),  
					  -webkit-linear-gradient(left, rgba(255,85,91, .8), rgba(255,85,91, .8)), 	
					  -webkit-linear-gradient(top, #fff, #fff),												 						
					  -webkit-linear-gradient(top, #fff 0px, #fff 29px, #a6ffed 0px)`,
} satisfies DefaultTheme;
