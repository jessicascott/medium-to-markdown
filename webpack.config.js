const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'main.js'
  },
  plugins: [new CopyWebpackPlugin([{ from: 'src/', ignore: ['main.js'] }])]
}
