const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
devtool: "source-map" ,
  mode:'development',
    entry:{
        dashboard_mon:path.resolve(__dirname,'./src/dashboard.js'),
        hybrid_threshold_mon:path.resolve(__dirname,'./src/hybrid_threshold_mon.js'),
        non_updating_mon:path.resolve(__dirname,'./src/non_updating.js')
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].bundle.js',
    },
    module: {
        rules: [
          // JavaScript
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    }

