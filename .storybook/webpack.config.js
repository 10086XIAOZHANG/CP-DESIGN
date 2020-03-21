const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.(jsx|js)?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-loader'
          }
        ]
      },
      // {
      //   test: /story\.js$/,
      //   loaders: [require.resolve('@storybook/addon-storysource/loader')],
      //   enforce: 'pre',
      // },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', { loader: 'less-loader' }],
        include: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  overrideBrowserslist: ['last 1 version', 'ie >= 11']
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, '..', 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../'),
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(ttf|woff|eot|svg|woff2)$/,
        loader: require.resolve('file-loader')
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}
