// Setup base Material-UI theme
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';

const headlineFont = `Merriweather, Georgia, serif`;
const bodyFont = `"Open Sans", Roboto, "Helvetica Neue", Arial, sans-serif`;

export default createMuiTheme({
  palette: {
    primary: {
      main: '#38ef7d',
    },
    secondary: {
      main: '#ffffff',
    },
    error: red,
  },
  typography: {
    fontFamily: bodyFont,
    fontSize: 14, // adjusts font across site including button labels
    // color: grey[500],
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    display1: {
      fontFamily: headlineFont,
      color: grey[900],
    },
    display2: { fontFamily: headlineFont, color: grey[900] },
    display3: { fontFamily: headlineFont, color: grey[900] },
    display4: { fontFamily: headlineFont, color: grey[900] },
    headline: { fontFamily: headlineFont, color: grey[900] },
    subheading: { fontFamily: headlineFont, color: grey[900] },
    title: { fontFamily: headlineFont, color: grey[900], fontWeight: 400 },
    body1: {
      fontFamily: bodyFont,
      fontSize: 19, // only adjusts size of mosaic text excludes buttons
      color: grey[900],
      fontWeight: 400,
      lineHeight: 1.6,
      margin: '1em 0',
      '& h2': { fontFamily: headlineFont, color: grey[900], fontWeight: 400 },
      '& h3': { fontFamily: headlineFont, color: grey[900], fontWeight: 400 },
    },
  },
  overrides: {
    MuiGrid: {
      'spacing-xs-16': {
        margin: '0 -8px',
        '& > *[class^=MuiGrid-typeItem]': {
          padding: '0 8px',
        },
      },
    },
  },
});
