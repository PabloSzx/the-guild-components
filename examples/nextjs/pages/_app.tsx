import { AppProps } from 'next/app';
import { ThemeProvider, GlobalStyles } from '@theguild/components';

export default function App({ pageProps, Component }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
