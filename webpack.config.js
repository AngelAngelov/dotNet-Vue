'use strict'
const {
  VueLoaderPlugin
} = require('vue-loader'),
    path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './Vue/main.js',
  },
  output: {
    path: path.join(__dirname, 'Scripts'),
    filename: "dev/[name].bundle.js"
  },
  module: {
    rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              js: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015'],
                  plugins: ['babel-plugin-transform-runtime', 'transform-object-rest-spread']
                }
              },
            }
          }
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
              plugins: ['babel-plugin-transform-runtime', 'transform-object-rest-spread']
            }
          }
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.css$/,
          use: [
              'vue-style-loader',
              'css-loader'
          ]
        }
    ]
  },
  plugins: [
      new VueLoaderPlugin()
  ]
}