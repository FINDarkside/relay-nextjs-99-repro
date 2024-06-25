import { createYoga, useLogger } from 'graphql-yoga';
import { NextApiRequest, NextApiResponse } from 'next';
import executableSchema from '../../graphql/executableSchema';

const server = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: executableSchema,
  graphqlEndpoint: '/api/graphql',
});

export default server;
