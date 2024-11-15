'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)', // Define a fonte personalizada
  },
  palette: {
    text: {
      primary: '#fefefe', // Cor padrão do texto
      secondary: '#bdbdbd', // Cor para textos secundários, se necessário
    },
    background: {
      default: '#121212', // Cor do fundo, caso precise personalizar
    },
  },
});

export default theme;
