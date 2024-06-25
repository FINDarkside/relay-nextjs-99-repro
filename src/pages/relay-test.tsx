import { graphql } from 'relay-runtime';
import { relayTestQuery } from '../../types/__generated__/relayTestQuery.graphql';
import { RelayProps, withRelay } from 'relay-nextjs';
import { usePreloadedQuery } from 'react-relay';
import { getClientEnvironment } from '@/relay/createClientEnvironment';
import { useRouter } from 'next/router';
import B from '@/components/B';
import A from '@/components/A';

const RelayTestQuery = graphql`
  query relayTestQuery($includeA: Boolean!, $includeB: Boolean!) {
    test
    ...AFragment @include(if: $includeA)
    ...BFragment @include(if: $includeB)
  }
`;

const RelayTest = ({
  preloadedQuery,
}: RelayProps<Record<string, never>, relayTestQuery>) => {
  const router = useRouter();
  const data = usePreloadedQuery<relayTestQuery>(
    RelayTestQuery,
    preloadedQuery
  );

  const isBEnabled = router.query.b === '1';
  const onClick = () => {
    router.push({ query: { b: isBEnabled ? '0' : '1' } });
  };

  return (
    <div>
      <h1>{data.test}</h1>
      <button onClick={onClick}>Click me</button>
      {!isBEnabled && <A fragmentRef={data} />}
      {isBEnabled && <B fragmentRef={data} />}
    </div>
  );
};

export default withRelay(RelayTest, RelayTestQuery, {
  fallback: <div>Loading</div>,
  // Create a Relay environment on the client-side.
  // Note: This function must always return the same value.
  createClientEnvironment: () => getClientEnvironment()!,
  // Server-side props can be accessed as the second argument
  // to this function.
  createServerEnvironment: async () => {
    const { createServerEnvironment } = await import(
      '../relay/createServerEnvironment'
    );
    return createServerEnvironment();
  },
  variablesFromContext: (ctx) => {
    const bEnabled = ctx.query.b === '1';
    return {
      includeA: !bEnabled,
      includeB: bEnabled,
    };
  },
});
