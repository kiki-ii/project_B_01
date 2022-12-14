const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),    
  },  
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            // options: {
            //   sourceMap: true,
            // },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },

      
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 4000,
          name: '[name].[contenthash]?[ext]',
          // name: '[name].[contenthash]?[ext]',
          publicPath: './dist/',
          // publicPath: path.resolve(__dirname, 'dist'),
          // outputPath: 'images',
          esModule: false
        }        
      },

      // 이미지 파일 로더
      {
        test: /\.(svg|png|jpe?g|gif)$/i,        
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash]?[ext]',
          publicPath: './dist/',
          //publicPath: path.resolve(__dirname, 'dist'),
          // outputPath: 'images',
          
        }
        
      }
    ]  
  }
  
}