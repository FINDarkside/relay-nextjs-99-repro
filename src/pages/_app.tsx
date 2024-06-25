import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import {
  getInitialPreloadedQuery,
  getRelayProps,
} from 'relay-nextjs/app';
import { getClientEnvironment } from '../relay/createClientEnvironment';

const clientEnv = getClientEnvironment();
const initialPreloadedQuery = getInitialPreloadedQuery({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  createClientEnvironment: () => getClientEnvironment()!,
});

function App({ Component, pageProps }: AppProps) {
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery);
  const env = relayProps.preloadedQuery?.environment ?? clientEnv!;

  return (
    <>
      <RelayEnvironmentProvider environment={env}>
        <Component {...pageProps} {...relayProps} />
      </RelayEnvironmentProvider>
    </>
  );
}

export default App;
