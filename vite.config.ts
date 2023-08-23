/*
 * @Author: EvefyouFE
 * @Date: 2023-08-10 13:42:48
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
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import { is } from "ramda";

const pathResolve = (v: string) => path.resolve(__dirname, v)

const externalPackages = [...Object.keys(pkg.peerDependencies)]
const regexOfPackages = externalPackages
  .map(packageName => new RegExp(`^${packageName}(\\/.*)?`));

const entries = {
  'index': pathResolve('ui/index.ts')
}
const otherEntryFile = Object.keys(entries).filter(e => e !== 'index')

export default defineConfig({
  resolve: {
    alias: [
      { find: /^~/, replacement: '' }
    ],
  },
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'react-evefyou-components',
          esModule: true,
          resolveStyle: (name) => `react-evefyou-components/${name}/windi.css`
        }
      ]
    }),
    WindiCSS({
      scan: {
        dirs: [
          './ui',
        ],
        fileExtensions: ['tsx', 'ts', 'js', 'jsx', 'css']
      }
    }),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      // rollupTypes: true,
      outDir: ['types'],
      beforeWriteFile: (filePath, content) => {
        const entryDFile = otherEntryFile
          .map(e => e.concat('.d.ts'))
          .find(e => filePath.includes(e))
        return entryDFile ? false : { filePath, content }
      },
    }),
    libInjectCss({
      build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        cssCodeSplit: true,
        outDir: '.',
      },
      entry: entries,
      fileName: (format, entryName) => {
        return entryName === 'index'
          ? `${format}/index.js`
          : entryName.includes('_')
            ? `${format}/locale/${entryName}.js`
            : `${format}/[name]/index.js`
      },
      name: 'react-evefyou-ui',
      formats: ["es", "cjs"],
      rollupOptions: {
        output: {
          chunkFileNames: (chunkInfo) => otherEntryFile.reduce(
            (acc, cur) => !chunkInfo.isEntry && chunkInfo.moduleIds.findIndex(s => s.includes(cur)) !== -1
              ? `[format]/${cur}/other.js` : acc,
            '[format]/_common/[name]/[name].js'
          ),
          assetFileNames: (assetInfo) => {
            console.log('assetInfo', assetInfo)
            return is(String, assetInfo.source) && assetInfo.source.includes('h-full') 
            ? '[ext]/windi.[ext]' 
            : '[ext]/[name].[ext]'
          },
        },
        external: regexOfPackages
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
          'text-color-base': '#000000d9'
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
