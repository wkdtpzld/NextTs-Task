import '@nextcss/reset';
import type { AppProps } from 'next/app'
import LayOut from '../components/LayOut'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import '../styles/index.css';
import { DehydratedState } from 'react-query/types/core';
import { NextPageContext } from 'next';
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

type PageProps = {
  dehydratedState?: DehydratedState;
};

type ExtendedAppProps<P = {}> = {
  err?: NextPageContext['err'];
} & AppProps<P>;


function MyApp({ Component, pageProps }: ExtendedAppProps<PageProps>) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
    
    
  )
}

export default MyApp
