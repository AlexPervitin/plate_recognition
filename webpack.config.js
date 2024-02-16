const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = (_env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    mode: argv.mode,
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name][hash:6].js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    devtool: isDev && 'cheap-module-source-map',
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      port: 3000,
    },
    module: {
      rules: [
        // JS,JSX
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // Using a cache to avoid of recompilation
            },
          },
          exclude: /node_modules/,
        },
        // SVG
        {
          test: /\.svg$/i,
          issuer: /\.[jt]s[x]?$/,
          use: ['@svgr/webpack'],
          generator: {
            filename: 'assets/svg/[name].[hash:6][ext]',
          },
          exclude: /node_modules/,
        },
        // IMGS
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new ESLintPlugin(),
      new CleanWebpackPlugin(),
    ],
    // optimization: {
    //   usedExports: false,
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin({
    //       minify: TerserPlugin.uglifyJsMinify,
    //       terserOptions: {},
    //     }),
    //   ],
    // },
  };
};
