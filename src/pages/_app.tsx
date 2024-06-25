import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { useRelayNextjs } from 'relay-nextjs/app';
import { getClientEnvironment } from '../relay/createClientEnvironment';

function App({ Component, pageProps }: AppProps) {
  const { env, ...relayProps } = useRelayNextjs(pageProps, {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    createClientEnvironment: () => getClientEnvironment()!,
  });
  return (
    <>
      <RelayEnvironmentProvider environment={env}>
        <Component {...pageProps} {...relayProps} />
      </RelayEnvironmentProvider>
    </>
  );
}

export default App;
