/*
 * @Author: EvefyouFE/evef
 * @Date: 2023-08-23 14:48:31
 * @FilePath: \react-evefyou-ui\vite.config.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';
import cssnanoPlugin from "cssnano";
import postcssPresetEnv from 'postcss-preset-env';
import WindiCSS from 'vite-plugin-windicss';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { includes } from "ramda";
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import fs from 'fs';

const pathResolve = (v: string) => path.resolve(__dirname, v)

const depPackages = [...Object.keys(pkg.dependencies)]
const externalPackages = [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)]
const regexOfPackages = externalPackages
  .map(packageName => new RegExp(`^${packageName}(\\/.*)?`));

const entries = {
  'index': pathResolve('ui/index.ts'),
  'locale/en_US': pathResolve('ui/locale/en_US.ts'),
  'locale/zh_CN': pathResolve('ui/locale/zh_CN.ts'),
}
const level1s = ['components', 'containers', 'layouts']
const locales = Object.keys(pkg.exports)
  .filter(e => e.includes('locale'))
  .map(e => e.split('./')[1])
const components = Object.keys(pkg.exports)
  .filter(e => e !== '.' && !e.includes('locale'))
  .map(e => e.split('./')[1])
  .filter(e => !includes(e, level1s))


console.log('level1s', level1s)
console.log('components', components)

export default defineConfig({
  plugins: [
    react(),
    WindiCSS({
      scan: {
        dirs: ['./ui'],
        fileExtensions: ['tsx', 'ts']
      }
    }),
    tsconfigPaths(),
    dts({
      // insertTypesEntry: true,
      rollupTypes: true,
      afterBuild: () => {
        const directoryPath = '.';
        const regexToDelete = /_\w+\.d\.ts$/;
        fs.readdirSync(directoryPath).forEach((file) => {
          const filePath = path.join(directoryPath, file);
          if (regexToDelete.test(file)) {
            try {
              fs.unlinkSync(filePath);
              console.log(`Deleted file: ${filePath}`);
            } catch (err) {
              console.error(`Error deleting file: ${err}`);
            }
          }
        });
      }
    }),
    libInjectCss({
      build: {
        minify: true,
        reportCompressedSize: true,
        cssCodeSplit: true,
        outDir: '.',
      },
      entry: entries,
      fileName: (format, entryName) => {
        return entryName === 'index'
          ? `${format}/index.js`
          : `${format}/[name]/index.js`
      },
      name: 'react-evefyou-ui',
      formats: ["es", "cjs"],
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            let en = components
              .map(e => e.split('/'))
              .find(e => id.includes(e[0]) && id.includes(e[1]))?.join('/')
            console.log('components en', en, id)
            en ??= level1s.find(e => id.includes(e))
            // console.log('level1s en', en)
            en ??= locales.find(l => id.includes(l.split('_')[0]))
            // console.log('manualChunks', id)
            return en
          },
          chunkFileNames: () => {
            // console.log('chunkInfo', chunkInfo.name)
            return '[format]/[name]/index.js'
          },
          assetFileNames: '[ext]/[name].[ext]',
        },
        plugins: [
          nodeResolve(),
          commonjs()
        ],
        external: (source) => depPackages.find(p => source.includes(p))
          ? false
          : regexOfPackages.findIndex(p => p.test(source)) !== -1
            ? true
            : false
      }
    })
  ],
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('ui/_common/styles/variables/index.less')}";`,
          'primary-color': '#0960bd',
          'text-color': '#c9d1d9',
          'text-color-base': '#000000d9',
        }
      }
    },
    postcss: {
      plugins: [
        cssnanoPlugin({
          preset: 'default',
        }) as any,
        postcssPresetEnv({

        })
      ]
    }
  },
})
