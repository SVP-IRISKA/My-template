import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";

const config = {
  entry: "./client/main.jsx",
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  output: {
    filename: "assets/js/[name].bundle.js",
    path: resolve(process.cwd(), "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },

      {
        test: /\.(css|sass|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ 
      filename: "assets/css/style.css" 
    }),
    new HtmlWebpackPlugin({
  template: "client/index.html"})
  ]
};

export default config;
