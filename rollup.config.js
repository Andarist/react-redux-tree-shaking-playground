import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './index.js',
  output: [
    {
      file: './dist/rolluped.js',
      format: 'esm',
    },
    {
      file: './dist/rolluped_uglified.js',
      format: 'esm',
      plugins: [
        terser({
          mangle: false,
          output: {
            beautify: true,
          },
        }),
      ],
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve(),
    commonjs({
      namedExports: {
        'prop-types': Object.keys(require('prop-types')),
        'react-is': Object.keys(require('react-is')),
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}
