/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    relay: {
      src: './src',
      schema: './src/graphql/schema.graphql',
      excludes: [
        '*/node_modules/*',
        '*/__mocks__/*',
        '*/__generated__/*',
        'pages/api*',
      ],
      language: 'typescript',
      artifactDirectory: './types/__generated__',
    },
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Ensures no server modules are included on the client.
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /(src\/relay\/createServerEnvironment)|createServerEnvironment/,
        })
      );
    }
    return config;
  },
};

export default nextConfig;
