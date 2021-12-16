import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {

      main: blue[500],
    },
    secondary: {
      main: blue[200],
    },
    
  },
});

export default theme;