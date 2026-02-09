const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    taskpane: './taskpane.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 3000,
    hot: true,
    https: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './taskpane.html',
      filename: 'taskpane.html',
      chunks: ['taskpane']
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'assets',
          to: 'assets',
          noErrorOnMissing: true
        },
        {
          from: 'commands.html',
          to: 'commands.html'
        },
        {
          from: 'manifest.xml',
          to: 'manifest.xml'
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
