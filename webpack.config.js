const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  mode: process.env.NODE_ENV,
  entry: './client/index.js', 
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html'
    }),
  ],


  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.(css|s[ac]ss)$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
    ],

  },

  resolve: {
    extensions: ['.js', '.jsx']
  },


  devServer: {

    proxy: {
      'api/*': {
        target: 'http://localhost:8080/',
        secure: false,
      },
    },
    // for react router if you use it
    historyApiFallback: true
  },
}