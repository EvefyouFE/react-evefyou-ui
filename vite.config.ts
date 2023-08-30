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
import { includes, pipe, split } from "ramda";
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
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        // cssCodeSplit: true,
        outDir: '.',
      },
      entry: entries,
      // fileName: (format, entryName) => {
      //   return entryName === 'index'
      //     ? `${format}/index.js`
      //     : `${format}/[name]/index.js`
      // },
      name: 'react-evefyou-ui',
      formats: ["es", "cjs"],
      rollupOptions: {
        input: {
          'index': 'ui/index.ts',
          'locale/en_US': 'ui/locale/en_US.ts',
          'locale/zh_CN': 'ui/locale/zh_CN.ts',
          "layouts": "./node_modules/react-evefyou-layouts/es/index.js",
          "containers": "./node_modules/react-evefyou-containers/es/index.js",
          "components": "./node_modules/react-evefyou-components/es/index.js",
          "layouts/AdminLayout": "./node_modules/react-evefyou-layouts/es/AdminLayout/index.js",
          "layouts/CommonLayout": "./node_modules/react-evefyou-layouts/es/CommonLayout/index.js",
          "layouts/BasicFooter": "./node_modules/react-evefyou-layouts/es/BasicFooter/index.js",
          "layouts/BasicHeader": "./node_modules/react-evefyou-layouts/es/BasicHeader/index.js",
          "layouts/BasicSider": "./node_modules/react-evefyou-layouts/es/BasicSider/index.js",
          "containers/BasicContainer": "./node_modules/react-evefyou-containers/es/BasicContainer/index.js",
          "containers/TabContainer": "./node_modules/react-evefyou-containers/es/TabContainer/index.js",
          "containers/TableContainer": "./node_modules/react-evefyou-containers/es/TableContainer/index.js",
          "containers/KeepAliveContainer": "./node_modules/react-evefyou-containers/es/KeepAliveContainer/index.js",
          "components/BasicBreadcrumb": "./node_modules/react-evefyou-components/es/BasicBreadcrumb/index.js",
          "components/BasicButton": "./node_modules/react-evefyou-components/es/BasicButton/index.js",
          "components/BasicDropdown": "./node_modules/react-evefyou-components/es/BasicDropdown/index.js",
          "components/BasicForm": "./node_modules/react-evefyou-components/es/BasicForm/index.js",
          "components/BasicHelp": "./node_modules/react-evefyou-components/es/BasicHelp/index.js",
          "components/BasicIcon": "./node_modules/react-evefyou-components/es/BasicIcon/index.js",
          "components/BasicMenu": "./node_modules/react-evefyou-components/es/BasicMenu/index.js",
          "components/BasicModal": "./node_modules/react-evefyou-components/es/BasicModal/index.js",
          "components/BasicPopButton": "./node_modules/react-evefyou-components/es/BasicPopButton/index.js",
          "components/BasicScroll": "./node_modules/react-evefyou-components/es/BasicScroll/index.js",
          "components/BasicTable": "./node_modules/react-evefyou-components/es/BasicTable/index.js",
          "components/BasicTitle": "./node_modules/react-evefyou-components/es/BasicTitle/index.js",
          "components/BasicFallback": "./node_modules/react-evefyou-components/es/BasicFallback/index.js",
          "components/BasicNProgress": "./node_modules/react-evefyou-components/es/BasicNProgress/index.js",
          "components/BasicResult": "./node_modules/react-evefyou-components/es/BasicResult/index.js"
        },
        output: {
          minifyInternalExports: false,
          manualChunks: (id) => {
            const debugId = id.split('/').filter(i => !i.includes('@')).join('/')
            if (id.includes('_common') && id.includes('hooks/use')) {
              console.log('hooks', id.split('/hooks/')[1].split('index.ts')[0])
              return '_common/hooks/'.concat(id.split('/hooks/')[1].split('index.ts')[0])
            }
            if (id.includes('_common') && id.includes('utils/')) {
              console.log('utils', id.split('/utils/')[1].split('index.ts')[0])
              return '_common/utils/'.concat(id.split('/utils/')[1].split('index.ts')[0])
            }
            let en = components
              .map(e => e.split('/'))
              .find(e => id.includes(e[0]) && id.includes(e[1]))?.join('/')
            console.log('components en', en, debugId)
            en ??= locales.find(l => id.includes(l.split('_')[0]))
            console.log('locales en', en, debugId)
            // if (id.includes('windi.css'))
            //   en = pipe(
            //     split('/'),
            //     last,
            //     split('.css'),
            //     head
            //   )(id) as string
            // id.includes('windi.css') && console.log('css manualChunks', en, id)
            return en
          },
          entryFileNames: (chunkInfo) => chunkInfo.name === 'index' ? '[format]/index.js' : '[format]/[name]/index.js',
          chunkFileNames: '[format]/[name]/index.js',
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
          hack: `true; @import (reference) "${path.resolve('ui/styles/variables/index.less')}";`,
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
