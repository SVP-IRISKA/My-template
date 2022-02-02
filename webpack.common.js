import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { resolve } from "path";

const config = {
  entry: "./client/main.jsx",
  resolve: {
    extension: [".js", ".jsx", ".json"],
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
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "assets/css/style.css" })],
  template: "client/index.html",
};

export default config;
