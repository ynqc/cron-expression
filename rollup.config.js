import uglify from 'rollup-plugin-uglify';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './index.js',
    output:{
        file: 'dist/index.js',
        name: 'test',
        format: 'umd'
    },
    plugins: [
        resolve(), // so Rollup can find `ms`
        commonjs(), // so Rollup can convert `ms` to an ES module
        nodeResolve({ preferBuiltins: false }),
    ]
}