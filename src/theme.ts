'use client';
import { Inter } from 'next/font/google';
import { ThemeOptions, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#ed7d31',
    },
    secondary: {
      main: '#6c5f5b',
    },
    background: {
      default: '#f6f1ee',
    },
    info: {
      main: '#ed8231',
    },
    text: {
      primary: '#4f4a45',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'black',
          height: 48,
          padding: '0 30px',
        },
      },
    },
  },
};

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let theme = createTheme(themeOptions)

theme = responsiveFontSizes(theme)

export default theme;
