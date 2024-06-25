// @ts-check

module.exports = {
  src: './src',
  schema: './src/graphql/schema.graphql',
  excludes: [
    // Prevent this warning: [WARN] Unexpected error in file categorizer for file `src/graphql/schema.graphql`: Expected *.graphql/*.gql file to be either a schema or extension..
    'src/graphql/schema.graphql',
    '*/node_modules/*',
    '*/__mocks__/*',
    '*/__generated__/*',
    'pages/api*',
  ],
  language: 'typescript',
  artifactDirectory: './types/__generated__',
};
