const path = require('path')

const config = {
  entry: path.join(__dirname, 'src', './index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /src/
      }
    ]
  }
}

module.exports = config;