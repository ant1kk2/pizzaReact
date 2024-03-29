const HtmlPlugin = require("html-webpack-plugin");
const CssPlugin = require("mini-css-extract-plugin");
const path = require("path");
const autoprefixer = require("autoprefixer");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./client/src/index.jsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle_[fullhash].js",
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new HtmlPlugin({
      template: "./client/src/index.html",
    }),
    new CssPlugin({
      filename: "style_[fullhash].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "client/src/assets", to: "assets" },
        { from: "client/src/fonts", to: "fonts" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        //babel
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.scss$/,
        use: [
          CssPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          CssPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/", // каталог, куда будут скопированы изображения в сборке
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 7777,
    static: {
      directory: path.join(__dirname, "build"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: true,
  },
  optimization: {
    concatenateModules: true,
  },
};
