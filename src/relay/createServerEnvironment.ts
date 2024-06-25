import { graphql } from 'graphql';
import { Network, Environment, Store, RecordSource } from 'relay-runtime';
import executableSchema from '../graphql/executableSchema';

export function createServerNetwork() {
  return Network.create(async (params, variables) => {
    const results = await graphql({
      schema: executableSchema,
      source: params.text!,
      variableValues: variables,
      contextValue: {},
    });

    const data = JSON.parse(JSON.stringify(results)) as any;
    return data;
  });
}

export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}
