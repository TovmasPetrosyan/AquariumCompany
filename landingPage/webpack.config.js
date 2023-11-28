const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');


module.exports = {
    mode: "development",
    devServer: {
      port: 8080,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    entry: {
      main: path.resolve(__dirname, "src/index.js"),
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
   
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
        minimize: true,
        minimizer: [
          new TerserPlugin({
            test: /\.js(\?.*)?$/i,
            extractComments: false,
            terserOptions: {
              format: {
                  comments: false,
              },
          },
          }),
          new CssMinimizerPlugin({
            test: /\.foo\.css$/i,
          }),
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                 plugins: [
                  imageminMozjpeg({
                    quality: 75,
                    progressive: true,
                  }),
                  imageminPngquant({
                    quality: [0.7, 0.9],
                    speed: 4,
                  }),
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
                   [
                    "svgo",
                    {
                      plugins: [
                        new MiniCssExtractPlugin(),
                        {
                          name: "preset-default",
                          params: {
                            overrides: {
                              removeViewBox: false,
                              addAttributesToSVGElement: {
                                params: {
                                  attributes: [
                                    { xmlns: "http://www.w3.org/2000/svg" },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          }),
        ],
      }, 
      resolve: {
        alias: {
            'mini-css-extract-plugin': require.resolve('mini-css-extract-plugin/dist/loader'),
        },
    },
};