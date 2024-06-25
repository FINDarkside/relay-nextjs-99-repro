import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import resolvers from './resolvers';

const executableSchema = makeExecutableSchema({
  typeDefs: loadFilesSync('src/graphql/*.graphql'),
  resolvers,
  inheritResolversFromInterfaces: true,
});

export default executableSchema;
