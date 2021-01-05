import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return createStyles({
    '@global': {
      '*': {
        margin: 0,
        padding: 0,
      },
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
    },
    body: {
      margin: 0,
      height: '100%',
      width: '100%',
    },
    a: {
      textDecoration: 'none',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
  });
});

const GlobalStyles = () => {
  // Inject global styles for all material components.
  useStyles();

  return null;
};

export default GlobalStyles;
