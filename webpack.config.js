var webpack = require('webpack');
var path = require('path');

const devmode = process.env.NODE_ENV !== 'production'

function getEntrySources(sources){
  if (devmode) {
    sources.push('webpack/hot/dev-server')
  }
  return sources
}

module.exports = {
  devtool: !devmode ? 'source-map' : 'inline-source-map',
  entry: {
    app: getEntrySources(["./index.jsx"])
  },
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    inline: true
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        },
        exclude: [ path.resolve(__dirname, "node_modules") ]
      }
    ]
  }
};
