import { Roboto } from 'next/font/google'; // Corrigir para 'next/font'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import { CssBaseline } from '@mui/material';

// Definir a fonte usando next/font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
