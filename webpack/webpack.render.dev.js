const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const genericNames = require('generic-names');

// 处理和 react-css-modules 使用时 hash生成不一致的问题
const generateScope = genericNames('[name]_[local]_[hash:base64:5]', {
  context: process.cwd(),
});

const devConfig = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../app/renderer/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    host: '127.0.0.1',
    port: 7001,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                getLocalIdent({ resourcePath }, localIdentName, localName) {
                  return generateScope(localName, resourcePath);
                },
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
