const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const setConfig = ({ isProduction }) => {
  const config = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle-[hash].js',
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
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html',
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
  };

  return isProduction ? { ...config, output: { publicPath: '/fancheer/' } } : { ...config };

};

module.exports = (env, argv) => {
  const { mode } = argv;

  const isProduction = mode === 'production';

  return setConfig({ isProduction })
};