const webpack = require('webpack');

module.exports = (env) => {
  // In production, the server serves the react app and CORS is not an issue.
  // In development, webpack-dev-server serves the react app, thus CORS prevents requests to server.
  // As a workaround in dev, the react app makes requests to a proxy. See proxy.js
  const apiHost = env && env.production
    ? 'http://localhost:8000'
    : 'http://localhost:8080';

  return {
    entry: './src/app.js',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/public`,
      filename: 'bundle.js',
    },
    devServer: {
      inline: true,
      contentBase: `${__dirname}/public`,
      port: 3333,
    },
    plugins: [
      new webpack.DefinePlugin({
        API_HOST: JSON.stringify(apiHost),
      }),
    ],
    module: {
      loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      }],
    },
  };
};
