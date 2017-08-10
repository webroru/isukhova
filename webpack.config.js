const NODE_ENV = process.env.NODE_ENV || 'development';

const cssnext = require('postcss-cssnext');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    track: './src/index.js',
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[name].js?ver=[chunkhash]',
  },

  resolve: {
    extensions: ['.js', '.css'],
  },

  devtool: NODE_ENV === 'development' ? 'source-map' : null,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {presets: ['es2015']},
        }],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'svg-fill-loader/encodeSharp',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  postcssImport(),
                  postcssUrl(),
                  cssnext(),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.svg$/,
        use: [
          'url-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle: true},
                {convertColors: {shorthex: false}},
                {convertPathData: false},
              ],
            },
          },
        ],
        oneOf: [
          {
            resourceQuery: /^\?fill=/,
            use: [
              'svg-fill-loader',
            ],
          },
        ],
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
    }),
  ],
};

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new UglifyJSPlugin({
      compress: {
        drop_console: true,
        unsafe: true,
      },
    })
  );
}
