export const dark = {
  color: {
    primary: '#ffffff',
    secondary: '#cccccc',
    contrast: '#00968d',
  },
  background: {
    primary: '#181818',
    secondary: '#151515',
    contrast: '#383838',

  },
  backgroundHover: {
    primary: '#00968d',
  },
  button: {
    primary: '#00a59b',
  },
  buttonHover: {
    primary: '#00968d',
  },
  textMessage: {
    error: '#f44336',
    info: '#03a9f4',
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  dark,
  breakpoints,
  fontFamily: '\'Poppins\', sans-serif',
  borderRadius: '6px',
  transition: '200ms ease-in-out',
};
