const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[hash].js',
    // publicPath: 'https://koremp.github.io/FanCheer/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};

const production = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[hash].js',
    publicPath: '/fancheer/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './dist/index.html'),
    }),
  ],
};

module.exports = (env, argv) => {
  const { mode } = argv;

  if (mode === 'development') {
    return development;
  }

  if (mode === 'production') {
    return production;
  }

  if (mode === 'none') {

  }
};