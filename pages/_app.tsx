import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@nextcss/reset';
import type { AppProps } from 'next/app'
import LayOut from '../components/LayOut'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import '../styles/index.css';
import { DehydratedState } from 'react-query/types/core';
import { NextPageContext } from 'next';

const queryClient = new QueryClient();

type PageProps = {
  dehydratedState?: DehydratedState;
};

type ExtendedAppProps<P = {}> = {
  err?: NextPageContext['err'];
} & AppProps<P>;

const theme = createTheme({
  typography: {
    fontFamily: "Noto Serif KR"
  },
});

function MyApp({ Component, pageProps }: ExtendedAppProps<PageProps>) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <LayOut>
            <Component {...pageProps} />
            </LayOut>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
    
  )
}

export default MyApp
