const path = require('path');
const paths = require('./config/paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
  },
  devServer: {
    overlay: true,
    historyApiFallback: true,
    contentBase: './',
    port: 8081,
    openPage: 'home',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss', '.less'],
    alias: {
      '@admin': paths.appAdmin,
      '@guest': paths.appGuest,
      '@localization': paths.appLocalization,
      '@main': paths.appMain,
      '@public': paths.appPublic,
      '@styles': paths.appStyles,
      '@user': paths.appUser,
    },
  },
};
