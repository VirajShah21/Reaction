import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import css from 'rollup-plugin-import-css';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), css()],
    },
    {
        input: 'lib/esm/index.d.ts',
        output: [{ file: 'lib/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    },
];
