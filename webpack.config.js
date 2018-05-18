const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/Index.jsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src','index.html')
    })
  ]
};
