/*
 * @Author: EvefyouFE
 * @Date: 2023-08-10 13:42:48
 * @FilePath: \react-evefyou-components\vite.config.ts
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
import fs from 'fs';
import { and, any, flip, includes, not, test } from "ramda";

const pathResolve = (v: string) => path.resolve(__dirname, v)

const libName = 'ui'


const depPackages = [...Object.keys(pkg.dependencies)]
const externalPackages = [...Object.keys(pkg.peerDependencies)]
const regexOfPackages = externalPackages
  .map(packageName => new RegExp(`^${packageName}(\\/.*)?`));

const level1 = Object.keys(pkg.exports)
  .filter(e => e !== '.' && !e.includes('locales') && !e.includes('css'))
  .map(e => e.split('./')[1]).filter(e => !e.includes('/'))
const components = Object.keys(pkg.exports)
  .filter(e => e !== '.' && !e.includes('locales') && !e.includes('css') && e.includes('s/'))
  .map(e => e.split('./')[1])
console.log('level1', level1)
console.log('components', components)
const locales = Object.keys(pkg.exports)
  .filter(e => e.includes('locales'))
  .map(e => e.split('./')[1])

const entries = Object.keys(pkg.exports).filter(e => !e.includes('css')).reduce((acc, cur) => {
  const isIndex = cur === '.'
  cur = cur.split('./')[1]
  const key = isIndex ? 'index' : cur
  const val = isIndex ? pathResolve(`${libName}/index.ts`) : pathResolve(`${libName}/${cur}/index.ts`)
  acc[key] = val
  return acc
}, {})

const formats = ['es', 'cjs']
console.log('entries', entries)

function moveFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error('移动文件失败:', err);
    } else {
      console.log('文件已成功移动到新位置');
    }
  });
}
function moveCjsFiles() {
  const f = 'cjs'
  components.forEach(comp => {
    fs.rm(pathResolve(`./${f}/${comp}.d.ts`), err => {
      console.error('删除文件失败:', err);
    })
    fs.rm(pathResolve(`./cjs/${comp}/index.d.ts`), err => {
      console.error('删除文件失败:', err);
    })
    fs.copyFile(pathResolve(`./es/${comp}/index.d.ts`), pathResolve(`./cjs/${comp}/index.d.ts`), err => {
      console.error('拷贝文件失败:', err, pathResolve(`./es/${comp}/index.d.ts`), pathResolve(`./cjs/${comp}/index.d.ts`));
    })
  })
}
function moveEsFiles() {
  const f = 'es'
  components.forEach(comp => {
    const oldComp = comp.split('/')[1]
    const oldPath = pathResolve(`./${f}/${oldComp}.d.ts`)
    const newPath = pathResolve(`./${f}/${comp}/index.d.ts`)
    // console.log('move', oldPath, newPath)
    moveFile(oldPath, newPath)

    fs.rm(pathResolve(`./${f}/${comp}.d.ts`), err => {
      console.error('删除文件失败:', err);
    })
  })
}
export default defineConfig({
  plugins: [
    react(),
    WindiCSS({
      scan: {
        dirs: [`./${libName}`],
        fileExtensions: ['tsx', 'ts']
      }
    }),
    tsconfigPaths(),
    dts({
      outDir: formats,
      rollupTypes: true,
      afterBuild() {
        console.log('start...', new Date().getTime())
        setTimeout(() => {
          moveEsFiles()
          formats.forEach(f => {
            level1.forEach(comp => {
              const oldPath = pathResolve(`./${f}/${comp}.d.ts`)
              const newPath = pathResolve(`./${f}/${comp}/index.d.ts`)
              moveFile(oldPath, newPath)
            })
            locales.forEach(l => {
              fs.rm(pathResolve(`${f}/${l}.d.ts`), (err) => {
                console.error('删除文件失败:', err);
              })
              const ol = l.split('locales/')[1]
              const oldPath = pathResolve(`./${f}/${ol}.d.ts`)
              const newPath = pathResolve(`./${f}/${l}/index.d.ts`)
              // console.log(oldPath, newPath)
              moveFile(oldPath, newPath)
            })
          })
          moveCjsFiles()
        }, 10000);
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
      name: 'react-evefyou-ui',
      formats: formats as any,
      rollupOptions: {
        output: {
          minifyInternalExports: false,
          manualChunks: (id) => id.includes('windi') && 'css/windi',
          chunkFileNames: '[format]/[name].js',
          assetFileNames: '[ext]/[name].[ext]',
          entryFileNames: (chunkInfo) => chunkInfo.name === 'index'
            ? '[format]/[name].js' : '[format]/[name]/index.js'
        },
        external: (id) => and(
          not(any(flip(includes)(id as any), depPackages)),
          any(flip(test)(id), regexOfPackages)
        )
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
          hack: `true; @import (reference) "${pathResolve(`${libName}/styles/variables/index.less`)}";`,
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
