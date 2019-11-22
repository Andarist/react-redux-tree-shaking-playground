const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: './webpacked.js',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          output: {
            beautify: true,
          },
        },
      }),
    ],
  },
}
