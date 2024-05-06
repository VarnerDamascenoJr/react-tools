import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#0054e9',
      shade: '#004acd',
      tint: '#1a65eb',
    },
    secondary: {
      main: '#0163aa',
      shade: '#015796',
      tint: '#1a73b3',
    },
    tertiary: {
      main: '#6030ff',
      shade: '#542ae0',
      tint: '#7045ff',
    },
    success: {
      main: '#2dd55b',
      shade: '#28bb50',
      tint: '#42d96b',
    },
    warning: {
      main: '#ffc409',
      shade: '#e0ac08',
      tint: '#ffca22',
    },
    danger: {
      main: '#c5000f',
      shade: '#ad000d',
      tint: '#cb1a27',
    },
    light: {
      main: '#f6f8fc',
      shade: '#d8dade',
      tint: '#f7f9fc',
    },
    medium: {
      main: '#5f5f5f',
      shade: '#545454',
      tint: '#6f6f6f',
    },
    dark: {
      main: '#2f2f2f',
      shade: '#292929',
      tint: '#444444',
    }
  },
  typography: {
    fontFamily: 'serif',
    fontWeightLight: 400,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightBold: 700,
  },
  spacing: 8,
  transitions: {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
  },
  easing: {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
});

export default theme;

