import React, { FunctionComponent } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import 'styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';

interface AppProps {
  Component: any;
  pageProps: any;
}
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});



export const Application: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </QueryClientProvider>
  );
};

export default Application;
