var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./app/assets/javascripts/entry.jsx",
  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "app/assets/javascripts"),
        exclude: /(node_modules)/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: require.resolve("react"),
        loader: "expose?React"
      }
    ]
  },
  eslint: {
    emitWarning: false,
    emitError: false,
    failOnWarning: false,
    failOnError: true
  },
    plugins: [
        new ExtractTextPlugin("style.css", { allChunks: true })
    ]
};
