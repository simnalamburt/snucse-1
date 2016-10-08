const webpack = require('webpack');

// Always-enabled plugins
const plugins = [
];

// Production-only plugins
const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
];

module.exports = {
  entry: './app.js',

  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'static/application.js'
  },
  devtool: 'source-map',
  plugins: process.env.NODE_ENV === 'production' ? plugins.concat(productionPlugins) : plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'xo'
      }
    ]
  },
  devServer: {
    contentBase: 'dist/',
    host: '0.0.0.0',
    port: 12321,
    historyApiFallback: true
  }
};
