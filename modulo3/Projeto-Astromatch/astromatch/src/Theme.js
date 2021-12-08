import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
      fontFamily: [
        'Barlow',
        'Montserrat'
      ]
    },
    palette: {
        primary: {
          // light: will be calculated from palette.primary.main,
          main: '#77B154',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          light: '#EBADAD',
          main: '#DD7373',
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#353535',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
        // dois índices dentro de sua paleta tonal.
        // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
        tonalOffset: 0.2,
        background: {
            default: "#353535"
        }
    }
    });